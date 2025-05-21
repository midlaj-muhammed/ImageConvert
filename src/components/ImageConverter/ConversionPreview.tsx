import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { ImageFormat } from './FormatSelector';

interface ConversionPreviewProps {
  originalImage: File | null;
  convertedImageUrl: string | null;
  format: ImageFormat;
  isConverting: boolean;
}

export function ConversionPreview({
  originalImage,
  convertedImageUrl,
  format,
  isConverting
}: ConversionPreviewProps) {
  const originalUrl = originalImage ? URL.createObjectURL(originalImage) : null;

  return (
    <Card className="p-6 overflow-hidden">
      <h3 className="text-lg font-medium mb-4" data-id="xcdmhtji8" data-path="src/components/ImageConverter/ConversionPreview.tsx">Preview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="vuzmyljdz" data-path="src/components/ImageConverter/ConversionPreview.tsx">
        {/* Original Image */}
        <div className="space-y-2" data-id="xumhwbve3" data-path="src/components/ImageConverter/ConversionPreview.tsx">
          <p className="text-sm font-medium" data-id="d8niea5l2" data-path="src/components/ImageConverter/ConversionPreview.tsx">Original Image</p>
          <div className="aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center" data-id="g1ljgplrm" data-path="src/components/ImageConverter/ConversionPreview.tsx">
            {originalUrl ?
            <img
              src={originalUrl}
              alt="Original"
              className="object-contain w-full h-full"
              onLoad={() => {
                // Revoke the object URL when the image loads to free memory
                if (originalUrl) {
                  URL.revokeObjectURL(originalUrl);
                }
              }} data-id="s0xudoyso" data-path="src/components/ImageConverter/ConversionPreview.tsx" /> :


            <div className="text-muted-foreground text-sm" data-id="s5wcqq07q" data-path="src/components/ImageConverter/ConversionPreview.tsx">No image selected</div>
            }
          </div>
          {originalImage &&
          <p className="text-xs text-muted-foreground" data-id="m8qcyshst" data-path="src/components/ImageConverter/ConversionPreview.tsx">
              {originalImage.name} ({(originalImage.size / 1024).toFixed(2)} KB)
            </p>
          }
        </div>

        <div className="hidden md:flex items-center justify-center" data-id="cohzhkgnb" data-path="src/components/ImageConverter/ConversionPreview.tsx">
          <Separator orientation="vertical" className="h-full" />
        </div>
        
        {/* Converted Image */}
        <div className="space-y-2" data-id="qvx9c64yc" data-path="src/components/ImageConverter/ConversionPreview.tsx">
          <p className="text-sm font-medium" data-id="ps2089ph8" data-path="src/components/ImageConverter/ConversionPreview.tsx">Converted to {format.toUpperCase()}</p>
          <div className="aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center" data-id="3xnt332vh" data-path="src/components/ImageConverter/ConversionPreview.tsx">
            {isConverting ?
            <div className="w-full h-full flex flex-col items-center justify-center gap-2" data-id="stveypn64" data-path="src/components/ImageConverter/ConversionPreview.tsx">
                <Skeleton className="w-full h-full" />
              </div> :
            convertedImageUrl ?
            <img
              src={convertedImageUrl}
              alt="Converted"
              className="object-contain w-full h-full" data-id="yvro89d20" data-path="src/components/ImageConverter/ConversionPreview.tsx" /> :


            <div className="text-muted-foreground text-sm" data-id="b3dgvftt4" data-path="src/components/ImageConverter/ConversionPreview.tsx">
                {originalImage ? "Click convert to see result" : "No image selected"}
              </div>
            }
          </div>
          {convertedImageUrl && !isConverting &&
          <p className="text-xs text-muted-foreground" data-id="7xuixyqix" data-path="src/components/ImageConverter/ConversionPreview.tsx">
              Converted image ready for download
            </p>
          }
        </div>
      </div>
    </Card>);

}