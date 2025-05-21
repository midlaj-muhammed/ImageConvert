import { useState, useCallback } from 'react';
import { saveAs } from 'file-saver';
import imageCompression from 'browser-image-compression';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { ImageUploader } from './ImageUploader';
import { FormatSelector, ImageFormat } from './FormatSelector';
import { ConversionPreview } from './ConversionPreview';
import { DownloadIcon, RefreshCwIcon } from 'lucide-react';

interface ImageConversionAppProps {
  onConversionComplete?: (originalFilename: string, originalFormat: string, convertedFormat: string, fileSize: number) => void;
}

export function ImageConversionApp({ onConversionComplete }: ImageConversionAppProps = {}) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [convertedImageUrl, setConvertedImageUrl] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ImageFormat>('png');
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setConvertedImageUrl(null);
    // Reset progress when a new image is selected
    setProgress(0);
  };

  const handleFormatChange = (format: ImageFormat) => {
    setSelectedFormat(format);
    setConvertedImageUrl(null);
    // Reset progress when format changes
    setProgress(0);
  };

  const convertImage = useCallback(async () => {
    if (!selectedImage) return;

    setIsConverting(true);
    setProgress(10);

    try {
      // Set mime type based on selected format
      const mimeType = `image/${selectedFormat === 'jpeg' ? 'jpeg' : selectedFormat}`;

      // Compress the image with options
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: mimeType,
        onProgress: (p: number) => {
          // Convert progress to percentage (0-100)
          setProgress(10 + Math.round(p * 80));
        }
      };

      setProgress(30);

      // Perform the conversion
      const compressedFile = await imageCompression(selectedImage, options);

      setProgress(90);

      // Create a URL for the converted image
      const convertedUrl = URL.createObjectURL(compressedFile);
      setConvertedImageUrl(convertedUrl);

      setProgress(100);

      toast({
        title: 'Conversion complete',
        description: `Image successfully converted to ${selectedFormat.toUpperCase()}`
      });

      // If callback is provided, call it with conversion details
      if (onConversionComplete && selectedImage) {
        const originalFormat = selectedImage.name.split('.').pop() || '';
        onConversionComplete(
          selectedImage.name,
          originalFormat,
          selectedFormat,
          compressedFile.size
        );
      }
    } catch (error) {
      console.error('Error converting image:', error);
      toast({
        title: 'Conversion failed',
        description: 'There was an error converting your image.',
        variant: 'destructive'
      });
    } finally {
      setIsConverting(false);
    }
  }, [selectedImage, selectedFormat]);

  const handleDownload = useCallback(() => {
    if (!convertedImageUrl || !selectedImage) return;

    try {
      // Generate a filename with the new extension
      const originalName = selectedImage.name;
      const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
      const newFileName = `${baseName}.${selectedFormat}`;

      // Download the file
      saveAs(convertedImageUrl, newFileName);

      toast({
        title: 'Download started',
        description: `Downloading ${newFileName}`
      });
    } catch (error) {
      console.error('Error downloading image:', error);
      toast({
        title: 'Download failed',
        description: 'There was an error downloading your image.',
        variant: 'destructive'
      });
    }
  }, [convertedImageUrl, selectedImage, selectedFormat]);

  const handleReset = () => {
    setSelectedImage(null);
    setConvertedImageUrl(null);
    setProgress(0);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto" data-id="de7vwm5gd" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
      <div className="space-y-2" data-id="q1rx5a2iy" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
        <h2 className="text-3xl font-bold tracking-tight" data-id="rfr4uujok" data-path="src/components/ImageConverter/ImageConversionApp.tsx">Image Converter</h2>
        <p className="text-muted-foreground" data-id="2339uqotc" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
          Convert your images to different formats quickly and easily
        </p>
      </div>

      {/* Step 1: Upload Image */}
      <div className="space-y-2" data-id="5p7ocf9d7" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
        <h3 className="text-lg font-medium" data-id="5wa8pq1zr" data-path="src/components/ImageConverter/ImageConversionApp.tsx">Step 1: Upload Image</h3>
        <ImageUploader onImageSelect={handleImageSelect} />
      </div>

      {/* Step 2: Select Format */}
      {selectedImage &&
      <div className="space-y-2" data-id="fyqadyg9x" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
          <h3 className="text-lg font-medium" data-id="b56wngp08" data-path="src/components/ImageConverter/ImageConversionApp.tsx">Step 2: Select Format</h3>
          <FormatSelector
          selectedFormat={selectedFormat}
          onChange={handleFormatChange} />

        </div>
      }

      {/* Step 3: Preview and Convert */}
      {selectedImage &&
      <div className="space-y-2" data-id="o4sgnhkoc" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
          <h3 className="text-lg font-medium" data-id="8yxu7znxf" data-path="src/components/ImageConverter/ImageConversionApp.tsx">Step 3: Preview and Convert</h3>
          <ConversionPreview
          originalImage={selectedImage}
          convertedImageUrl={convertedImageUrl}
          format={selectedFormat}
          isConverting={isConverting} />

        </div>
      }

      {/* Conversion Progress */}
      {isConverting &&
      <Card className="p-4">
          <div className="space-y-2" data-id="n07c93khn" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
            <div className="flex justify-between" data-id="wf0yz0abd" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
              <span className="text-sm font-medium" data-id="lhlek3qlz" data-path="src/components/ImageConverter/ImageConversionApp.tsx">Converting...</span>
              <span className="text-sm" data-id="ajtzurmkm" data-path="src/components/ImageConverter/ImageConversionApp.tsx">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>
      }

      {/* Action Buttons */}
      {selectedImage &&
      <div className="flex flex-wrap gap-4" data-id="0bt2f87xj" data-path="src/components/ImageConverter/ImageConversionApp.tsx">
          <Button
          onClick={convertImage}
          disabled={isConverting}
          className="flex items-center gap-2">

            <RefreshCwIcon size={16} className={isConverting ? "animate-spin" : ""} />
            {isConverting ? "Converting..." : "Convert Image"}
          </Button>
          
          {convertedImageUrl &&
        <Button
          variant="secondary"
          onClick={handleDownload}
          className="flex items-center gap-2">

              <DownloadIcon size={16} />
              Download
            </Button>
        }
          
          <Button
          variant="outline"
          onClick={handleReset}
          disabled={isConverting}>

            Start Over
          </Button>
        </div>
      }
    </div>);

}