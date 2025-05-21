import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
'@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

interface ConversionRecord {
  ID: number;
  original_filename: string;
  original_format: string;
  converted_format: string;
  conversion_date: string;
  file_size: number;
}

export const ConversionHistory = () => {
  const { user } = useAuth();
  const [conversions, setConversions] = useState<ConversionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const conversionHistoryTableId = 8247;

  useEffect(() => {
    if (user) {
      fetchConversionHistory();
    }
  }, [user]);

  const fetchConversionHistory = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const { data, error } = await window.ezsite.apis.tablePage(conversionHistoryTableId, {
        PageNo: 1,
        PageSize: 100,
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
      setConversions(data.List || []);
    } catch (error) {
      console.error('Error fetching conversion history:', error);
      toast({
        title: 'Error',
        description: 'Failed to load conversion history',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return 'Invalid date';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Conversion History</CardTitle>
          <CardDescription>Loading your conversion history...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center p-8" data-id="gxf6132fd" data-path="src/components/Dashboard/ConversionHistory.tsx">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" data-id="4k9alnufi" data-path="src/components/Dashboard/ConversionHistory.tsx"></div>
          </div>
        </CardContent>
      </Card>);

  }

  if (conversions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Conversion History</CardTitle>
          <CardDescription>You haven't converted any images yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8" data-id="nl5ifii9m" data-path="src/components/Dashboard/ConversionHistory.tsx">
            <p className="text-gray-500 mb-4" data-id="wy5sbw7hh" data-path="src/components/Dashboard/ConversionHistory.tsx">Start converting images to see your history here.</p>
            <Button
              onClick={() => window.location.href = '/dashboard'}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">

              Go to Converter
            </Button>
          </div>
        </CardContent>
      </Card>);

  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion History</CardTitle>
        <CardDescription>A record of all your image conversions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Original Filename</TableHead>
              <TableHead>Conversion</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversions.map((conversion) =>
            <TableRow key={conversion.ID}>
                <TableCell className="font-medium">{conversion.original_filename}</TableCell>
                <TableCell>
                  {conversion.original_format.toUpperCase()} → {conversion.converted_format.toUpperCase()}
                </TableCell>
                <TableCell>{formatFileSize(conversion.file_size)}</TableCell>
                <TableCell>{formatDate(conversion.conversion_date)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>);

};

export default ConversionHistory;