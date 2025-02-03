import React from 'react'

export default function QuizListing({ quizData, index }) {

    if(quizData.correct_answer == 1){
        quizData.correct_answer = quizData.option_1
    } else if(quizData.correct_answer == 2){
        quizData.correct_answer = quizData.option_2
    } else if(quizData.correct_answer == 3){
        quizData.correct_answer = quizData.option_3
    } else if(quizData.correct_answer == 4){
        quizData.correct_answer = quizData.option_4
    }

  return (
    <>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <td class="px-6 py-4">
                {index+1}
            </td>
            <td class="px-6 py-4">
            { quizData.question }
            </td>
            <td class="px-6 py-4">
            { quizData.option_1 }
            </td>
            <td class="px-6 py-4">
            { quizData.option_2 }
            </td>
            <td class="px-6 py-4">
            { quizData.option_3 }
            </td>
            <td class="px-6 py-4">
            { quizData.option_4 }
            </td>
            <td class="px-6 py-4">
            { quizData.correct_answer }
            </td>
        </tr>
    </>
  )
}
