// Type declaration for RichTextEditor until it's officially exported
declare module "efc-ui-library" {
  import * as React from "react";

  export interface FileAttachment {
    id: string;
    filename: string;
  }

  export interface Template {
    id: string;
    name: string;
    content: string;
  }

  export interface MergeField {
    id: string;
    label: string;
    value: string;
    category?: string;
  }

  export interface RichTextEditorProps {
    hasMergeFields?: boolean;
    hasTemplates?: boolean;
    hasFormInputs?: boolean;
    hideMenuBar?: boolean;
    onFileUpload?: (file: File) => Promise<FileAttachment>;
    onFileChange?: (files: FileAttachment[]) => void;
    onContentChange?: (content: string) => void;
    defaultContent?: string;
    mergeFieldFilter?: (field: MergeField) => boolean;
    templates?: Template[];
    mergeFields?: MergeField[];
    className?: string;
  }

  export const RichTextEditor: React.ForwardRefExoticComponent<RichTextEditorProps & React.RefAttributes<HTMLDivElement>>;
}
