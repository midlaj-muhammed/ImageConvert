import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export type ImageFormat = 'png' | 'jpeg' | 'webp' | 'gif';

interface FormatSelectorProps {
  selectedFormat: ImageFormat;
  onChange: (format: ImageFormat) => void;
}

type FormatOption = {
  value: ImageFormat;
  label: string;
  description: string;
};

const formats: FormatOption[] = [
{
  value: 'png',
  label: 'PNG',
  description: 'Lossless compression, supports transparency'
},
{
  value: 'jpeg',
  label: 'JPEG',
  description: 'Smaller file size, suitable for photos'
},
{
  value: 'webp',
  label: 'WebP',
  description: 'Modern format with better compression'
},
{
  value: 'gif',
  label: 'GIF',
  description: 'Supports animation, limited colors'
}];


export function FormatSelector({ selectedFormat, onChange }: FormatSelectorProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4" data-id="otfbl973u" data-path="src/components/ImageConverter/FormatSelector.tsx">Choose Output Format</h3>
      <RadioGroup
        value={selectedFormat}
        onValueChange={(value) => onChange(value as ImageFormat)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {formats.map((format) =>
        <div key={format.value} className="relative" data-id="35mcfrf92" data-path="src/components/ImageConverter/FormatSelector.tsx">
            <RadioGroupItem
            value={format.value}
            id={`format-${format.value}`}
            className="peer sr-only" />

            <Label
            htmlFor={`format-${format.value}`}
            className="flex flex-col p-4 border rounded-md cursor-pointer transition-all hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5">

              <span className="text-base font-medium mb-1" data-id="ewdr5xhz7" data-path="src/components/ImageConverter/FormatSelector.tsx">{format.label}</span>
              <span className="text-sm text-muted-foreground" data-id="tl0ew5t3d" data-path="src/components/ImageConverter/FormatSelector.tsx">{format.description}</span>
            </Label>
          </div>
        )}
      </RadioGroup>
    </Card>);

}