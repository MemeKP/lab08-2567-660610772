import React from 'react'
//ปณิตา ดอนเมือง 660610772
function Footer({year,fullName,studentID}) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {year} {fullName} {studentID}
        </p>
      </div>
  );
}

export default function allFooter(){
  const student = [
    {year: ' 2024 ', fullName: ' Panita Donmuang ', studentID: '660610772'}
  ];
  return(
    <div>
    {student.map((item, index) => (
      <Footer key={index} {...item} />
    ))}
    </div>
  )
}