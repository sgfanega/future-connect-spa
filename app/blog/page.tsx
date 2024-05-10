import { GiConsoleController } from "react-icons/gi";
import { getAboutUsPageContent } from "../api"

export default async function Blog() {
  
  const testData = await getAboutUsPageContent();

  console.log(testData);
  
  return (
    <main className="blog w-100 h-100 d-flex align-items-center justify-content-center" style={{minHeight: "60dvh"}}>
      <h1 className="display-1 fw-medium text-secondary text-center">Blog Coming soon!</h1>
    </main>
  )
}