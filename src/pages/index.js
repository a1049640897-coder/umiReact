import styles from './index.css';
import { Button }  from 'antd'
import router from 'umi/router';
export default function() {
  const toDemo = () =>{
    router.push('/demo')
  }
  return (
    <div className={styles.normal}>
      <Button onClick={toDemo}>测试</Button>
    </div>
  );
}
