declare module 'cloudinary-react' {
    import * as React from 'react';
  
    export interface CloudinaryContextProps {
      cloudName: string;
      uploadPreset?: string;
      children?: React.ReactNode;
    }
  
    export class CloudinaryContext extends React.Component<CloudinaryContextProps> {}
  
    export interface ImageProps {
      publicId: string;
      alt?: string;
      [key: string]: unknown;
    }
  
    export class Image extends React.Component<ImageProps> {}
  }