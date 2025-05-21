import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import ConversionHistory from '@/components/Dashboard/ConversionHistory';

const HistoryPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6" data-id="6k5rt78r9" data-path="src/pages/HistoryPage.tsx">
        <div data-id="kjj7bz082" data-path="src/pages/HistoryPage.tsx">
          <h1 className="text-3xl font-bold tracking-tight" data-id="6i6pfja7v" data-path="src/pages/HistoryPage.tsx">Conversion History</h1>
          <p className="text-muted-foreground mt-2" data-id="n4373u715" data-path="src/pages/HistoryPage.tsx">
            View a record of all your previous image conversions.
          </p>
        </div>
        
        <ConversionHistory />
      </div>
    </DashboardLayout>);

};

export default HistoryPage;