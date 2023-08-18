import Head from 'next/head'
import Image from 'next/image'

import * as styles from './HeaderBar.module.css'
import { NotificationsActive } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function HeaderBar(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <meta name={props.descripcion} content={props.content} />
      </Head>
      <header className={styles.header}>{props.header}</header>
      <div className={styles.containerIcon}></div>
      <div className={styles.containerImage}>
        <NotificationsActive style={{ color: '#353535' }} />
        <Button
          style={{
            height: '50%',
            width: '0%',
            marginLeft: '30%',
          }}
          href={props.href}
        >
          <Image
            src={props.imgProfile}
            alt="img-profile"
            className={styles.profileImage}
            style={{ width: '80px', height: '70px' }}
          />
        </Button>
      </div>
    </div>
  )
}
