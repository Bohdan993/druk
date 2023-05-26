import {CSSProperties, FC} from 'react';
import {useCallback, useMemo} from 'react';
import {useDropzone, FileWithPath} from 'react-dropzone';
import parse from 'html-react-parser';

const baseStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 12,
    lineHeight: 1.2,
    color: '#9882AC',
    alignItems: 'center',
    padding: '4px 10px',
    letterSpacing: '0.1em',
    minHeight: "50px",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#AEC670',
    borderStyle: 'dashed',
    backgroundColor: 'rgba(255,255,255,0.3)',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer'
  };
  
  const focusedStyle: CSSProperties = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle: CSSProperties = {
    borderColor: '#00e676'
  };
  
  const rejectStyle: CSSProperties = {
    borderColor: '#ff1744'
  };


  type DropzoneProps = {
    isDisabled: boolean,
    setFile: any,
    filesProp: string | FileWithPath
  }


export const Dropzone: FC<DropzoneProps> = ({isDisabled = false, setFile, filesProp}) => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach((file: FileWithPath) => {
      setFile(file);
    })
    
  }, [setFile]);

  const {
    getRootProps, 
    getInputProps, 
    isFocused,
    isDragAccept,
    isDragReject
} = useDropzone({onDrop, multiple: false, disabled: isDisabled, accept: {
    'image/vnd.djvu': ['.djvu'],
    'text/fb2+xml': ['.fb2'],
    'application/pdf': ['.pdf'],
    'application/epub+zip': ['.epub']
}});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const files = filesProp === "" ? [] : [filesProp].map((file: string | FileWithPath) => {
    if(typeof file === 'string') {
      return "";
    }

    return (
      <li key={file!?.path!}>
        {file!?.path!} - {Math.floor(file!?.size!/1000)} Кбайт
      </li>
    )
  });

  return (
    <>
        <div {...getRootProps({style, className: `dropzone ${isDisabled ? 'disabled' : ''}`})}>
            <input {...getInputProps()}/>
            <div className="text-center">{files?.length ? <ul>{files}</ul> : parse("Перенесіть файл сюди <br> чи <br> натисніть тут")}</div>
        </div>
    </>
  )
}