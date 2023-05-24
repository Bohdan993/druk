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
    setFile: any
  }


export const Dropzone: FC<DropzoneProps> = ({isDisabled = false, setFile}) => {
  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file: Blob) => {
      setFile(file);

      // const reader = new FileReader()

      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      // reader.onload = () => {
      // // Do whatever you want with the file contents
      //   const binaryStr = reader.result
      //   console.log(binaryStr)
      // }
      // reader.readAsArrayBuffer(file)
    })
    
  }, [setFile]);

  const {
    getRootProps, 
    getInputProps, 
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles
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

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {Math.floor(file.size/1000)} Кбайт
    </li>
  ));

  return (
    <>
        <div {...getRootProps({style, className: `dropzone ${isDisabled ? 'disabled' : ''}`})}>
            <input {...getInputProps()}/>
            <p className="text-center">{files?.length ? <ul>{files}</ul> : parse("Перенесіть файл сюди <br> чи <br> натисніть тут")}</p>
        </div>
    </>
  )
}