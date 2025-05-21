import { useState, useRef, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { UploadIcon, ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

export function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onImageSelect(file);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onImageSelect(file);
      }
    }
  };

  const validateFile = (file: File): boolean => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please select an image file.',
        variant: 'destructive'
      });
      return false;
    }

    // 10MB limit
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: 'File too large',
        description: 'Please select an image smaller than 10MB.',
        variant: 'destructive'
      });
      return false;
    }

    return true;
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card
      className={`p-8 border-2 border-dashed transition-all duration-300 ${
      isDragging ? 'border-primary bg-accent' : 'border-border'}`
      }
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>

      <div className="text-center space-y-6" data-id="mg7hy2fs1" data-path="src/components/ImageConverter/ImageUploader.tsx">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center" data-id="uqwbiuqqu" data-path="src/components/ImageConverter/ImageUploader.tsx">
          <ImageIcon size={24} className="text-primary" />
        </div>
        <div className="space-y-2" data-id="xsom7azja" data-path="src/components/ImageConverter/ImageUploader.tsx">
          <h3 className="font-medium text-lg" data-id="awws0byyp" data-path="src/components/ImageConverter/ImageUploader.tsx">Drag & Drop Your Image</h3>
          <p className="text-muted-foreground text-sm" data-id="o0gjmfk4t" data-path="src/components/ImageConverter/ImageUploader.tsx">
            Supports PNG, JPG, GIF, WebP and other formats
          </p>
        </div>
        <div className="flex items-center justify-center" data-id="7v0euk8qg" data-path="src/components/ImageConverter/ImageUploader.tsx">
          <div className="w-full max-w-xs mx-auto" data-id="b1grr37ru" data-path="src/components/ImageConverter/ImageUploader.tsx">
            <Button
              variant="outline"
              onClick={handleButtonClick}
              className="w-full flex items-center gap-2">

              <UploadIcon size={16} />
              <span data-id="v7jvgfltq" data-path="src/components/ImageConverter/ImageUploader.tsx">Browse Files</span>
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/*"
              className="hidden" data-id="u71779un2" data-path="src/components/ImageConverter/ImageUploader.tsx" />

          </div>
        </div>
        <p className="text-xs text-muted-foreground" data-id="dg7n1wv2p" data-path="src/components/ImageConverter/ImageUploader.tsx">
          Maximum file size: 10MB
        </p>
      </div>
    </Card>);

}