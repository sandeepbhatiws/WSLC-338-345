import React, { useEffect, useState } from 'react'
import QuizListing from './QuizListing'
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../config/firebase';

export default function ViewQuiz() {

  const [quizData, setQuizData]= useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'quizzess');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      var finalData = [];
      for(var index in data){
        // var finalData = [data[index], ...quizData];
        
        finalData.push(data[index]);
      }

      setQuizData(finalData);
      


      // updateStarCount(postElement, data);
    });
  },[]);

  return (
    <>
      <div className='w-[1200px] mx-auto'>
        <div className='text-center text-3xl m-6'>
            <h2 className="font-semibold text-gray-900">View Quiz</h2>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-900/15">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  S.No
                </th>
                <th scope="col" class="px-6 py-3">
                  Question
                </th>
                <th scope="col" class="px-6 py-3">
                  Option 1
                </th>
                <th scope="col" class="px-6 py-3">
                  Option 2
                </th>
                <th scope="col" class="px-6 py-3">
                Option 3
                </th>
                <th scope="col" class="px-6 py-3">
                Option 4
                </th>
                <th scope="col" class="px-6 py-3">
                Correct Answer
                </th>
              </tr>
            </thead>
            <tbody>

              {
                (quizData.length > 0)
                ?
                  quizData.map((v,i) => {
                    return(
                      <QuizListing key={i}/>
                    )
                  })
                  
                :
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td class="px-6 py-4 text-center" colSpan={7}>
                      No Record Found !!
                  </td>
                </tr>

              }
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
