import DOMPurify from "dompurify";
import React from "react";
import { useAxiosGet } from "../../MyAPI/Axios";
import './Read.css'
/**
 * This is a React function component.
 *
 * @param {Object} targetURL
 * @param {Object} targetURL.location
 * @param {String} targetURL.location.pathname
 */
export function ReadArticle(targetURL)
{
    const slug= targetURL.location.pathname.substr(6,targetURL.location.pathname.length);
    const url="http://localhost:7999/api/Article/GetBySlug/" +slug;
    const returnData = useAxiosGet(url)
    const article=[]; 
    let content =null;
    
    if(returnData.error){
        
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                {url}
            </div>

        </div>
    }
    if(returnData.loading){
        content = <h1>Page is load</h1>
    }
  
    if(returnData.data){
        
        article.push(returnData.data[0]);
    }

    const renderPost = (postData) => {
        return (
            <div>
                <div>
                    <h1 className="article-header">
                        {postData.Title}
                    </h1>
                    <html className="article-body">
                    { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData.Detail) }} /> }
                    </html>
                    
                </div>
            </div>
         
        );
      };
    if(returnData.data){
        content = 
        <div  >
            
            {article.map(renderPost)}
        </div>
    }
    
    return (
        <div className="article" >
          {content}
      </div>
        
    )
} 