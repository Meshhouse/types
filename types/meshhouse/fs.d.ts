export type FileManagerEntry = {
  name: string;
  type: 'directory' | 'file'
  mime: string | null;
  size: number;
  path: string;
  created_at: number;
  updated_at: number;
}
