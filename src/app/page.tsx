import Header from "./components/app.header";
import SearchJob from "./components/searchJob";
import ListJob from "./components/listJob";
import TopCompany from './components/topCompany'

import Footer from "./components/app.footer";
import classNames from "classnames/bind";
import styles from './styles/footer.module.scss'

const cl = classNames.bind(styles)
export default function Home() {
  return (
    <>
      <Header />
     
          <SearchJob />
          <ListJob />
          <TopCompany />
          <Footer /> 
       
    </>
  );
}
