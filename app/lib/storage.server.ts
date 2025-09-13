// File upload service using AWS S3
export interface UploadResult {
  url: string;
  key: string;
  size: number;
  type: string;
}

export interface UploadOptions {
  file: File;
  folder: string;
  allowedTypes?: string[];
  maxSize?: number; // in bytes
}

// Mock implementation - replace with actual AWS S3 service
export async function uploadFile({ file, folder, allowedTypes, maxSize }: UploadOptions): Promise<UploadResult> {
  // Validate file type
  if (allowedTypes && !allowedTypes.includes(file.type)) {
    throw new Error(`File type ${file.type} not allowed. Allowed types: ${allowedTypes.join(', ')}`);
  }
  
  // Validate file size
  if (maxSize && file.size > maxSize) {
    throw new Error(`File size ${file.size} exceeds maximum allowed size of ${maxSize} bytes`);
  }
  
  // In a real implementation, you would:
  // 1. Generate a unique key for the file
  // 2. Upload to S3 using AWS SDK
  // 3. Return the public URL
  
  const key = `${folder}/${Date.now()}-${file.name}`;
  const mockUrl = `https://your-s3-bucket.s3.amazonaws.com/${key}`;
  
  // Mock upload simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: mockUrl,
        key,
        size: file.size,
        type: file.type,
      });
    }, 1000);
  });
}

export async function deleteFile(key: string): Promise<boolean> {
  // In a real implementation, delete from S3
  console.log(`Deleting file: ${key}`);
  return true;
}

// Helper function to generate presigned URLs for direct uploads
export async function getPresignedUrl(fileName: string, folder: string): Promise<string> {
  const key = `${folder}/${Date.now()}-${fileName}`;
  // In a real implementation, generate presigned URL using AWS SDK
  return `https://your-s3-bucket.s3.amazonaws.com/presigned-upload-url?key=${key}`;
}

// File type validations
export const fileTypes = {
  images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  spreadsheets: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  all: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
};

// File size limits (in bytes)
export const fileSizeLimits = {
  image: 5 * 1024 * 1024, // 5MB
  document: 10 * 1024 * 1024, // 10MB
  assignment: 25 * 1024 * 1024, // 25MB
};
