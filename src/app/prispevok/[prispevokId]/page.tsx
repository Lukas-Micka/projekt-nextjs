// src/app/prispevok/[id]/page.tsx
import Typography from '@mui/material/Typography';

export const metadata = {title: "detail prispevkov | ZoskaSnap"};

export default function PostDetail({
  params,}:{
    params:{prispevokId:string}
  }

) {
  return (
    
      <Typography > detail prispevkov : {params.prispevokId}</Typography>
    
  );
  
}
