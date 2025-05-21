import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { ImageConversionApp } from '@/components/ImageConverter/ImageConversionApp';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const DashboardPage = () => {
  const { user } = useAuth();
  const [lastConversions, setLastConversions] = useState<any[]>([]);
  const conversionHistoryTableId = 8247; // Table ID from the created conversion_history table

  useEffect(() => {
    if (user) {
      fetchLastConversions();
    }
  }, [user]);

  const fetchLastConversions = async () => {
    if (!user) return;

    try {
      const { data, error } = await window.ezsite.apis.tablePage(conversionHistoryTableId, {
        PageNo: 1,
        PageSize: 5,
        OrderByField: "conversion_date",
        IsAsc: false,
        Filters: [
        {
          name: "user_id",
          op: "Equal",
          value: user.ID
        }]

      });

      if (error) throw error;
      setLastConversions(data.List || []);
    } catch (error) {
      console.error('Error fetching conversion history:', error);
    }
  };

  // Function to save conversion history
  const saveConversion = async (originalFilename: string, originalFormat: string, convertedFormat: string, fileSize: number) => {
    if (!user) return;

    try {
      const { error } = await window.ezsite.apis.tableCreate(conversionHistoryTableId, {
        user_id: user.ID,
        original_filename: originalFilename,
        original_format: originalFormat,
        converted_format: convertedFormat,
        conversion_date: new Date().toISOString(),
        file_size: fileSize
      });

      if (error) throw error;

      // Refresh the conversion history
      fetchLastConversions();
    } catch (error) {
      console.error('Error saving conversion:', error);
      toast({
        title: 'Error',
        description: 'Failed to save conversion history',
        variant: 'destructive'
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6" data-id="a19vr9shr" data-path="src/pages/DashboardPage.tsx">
        <div data-id="of18d2q5l" data-path="src/pages/DashboardPage.tsx">
          <h1 className="text-3xl font-bold tracking-tight" data-id="msne0v0kh" data-path="src/pages/DashboardPage.tsx">Welcome, {user?.Name || 'User'}!</h1>
          <p className="text-muted-foreground mt-2" data-id="05qxm3ari" data-path="src/pages/DashboardPage.tsx">
            Convert your images to different formats, track your history, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-id="z0vwjkjjc" data-path="src/pages/DashboardPage.tsx">
          <div className="lg:col-span-3" data-id="pah8xki4t" data-path="src/pages/DashboardPage.tsx">
            <ImageConversionApp onConversionComplete={saveConversion} />
          </div>
        </div>
      </div>
    </DashboardLayout>);

};

export default DashboardPage;