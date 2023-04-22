import { headers } from 'next/headers';

export default () => {
  const headersList = headers();
  const referer = headersList.get('referer');
 <div>
   <p>{referer}</p>
 </div>
}
