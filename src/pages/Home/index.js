import { useEffect } from 'react';
import styles from '../style.less';
import { getHomeData, updateHomeData } from '@/services';

export default function IndexPage() {
  useEffect(() => {
    updateHomeData({ name: '王雅丽', age: 28 }).then((res) => {
      getHomeData().then((res) => {
        console.log('1234', res);
      });
    });
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
}
