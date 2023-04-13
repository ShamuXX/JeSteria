import Head from 'next/head'
import { Poppins } from 'next/font/google'

const inter = Poppins({ 
  weight: '400',
  subsets: ['latin'] 
})

export default  function PageLayout({ children, title ='Jesteria' }) {
  return(
	<>
    <Head>
			<title>{title}</title>
			<meta name="description" content="Jesteria" />
			<link rel="icon" href="/favicon.ico" />
    </Head>
		<main className={inter.className}>
			{children}
		</main>
	</>
    )
}