import Bullet from "../UI/Bullet";


function ProductFeatures({usage, faceForm, strapMaterial}) {
  return (
    <div className="flex flex-col items-start justify-center gap-y-3 lg:pr-4 lg:gap-y-6 text-slate-800 text-sm lg:text-base">
            <span className="font-semibold">ویژگی های کالا</span>
            <div className="flex flex-col items-start justify-center gap-y-2  lg:gap-y-4 w-full ">
              <Usage usage={usage} />
              <FaceForm faceForm={faceForm} />
              <StrapMaterial strapMaterial={strapMaterial} />
            </div>
          </div>
  )
}

export default ProductFeatures

function Usage({ usage }) {
    return (
      <div className="flex lg:flex-col gap-y-2">
        <div className="flex items-center justify-start gap-x-2 font-extralight">
          <Bullet />
          <span>نوع کاربری</span>
        </div>
        <div className="mr-3">{usage}</div>
      </div>
    );
  }
  function FaceForm({ faceForm }) {
    return (
      <div className="flex lg:flex-col gap-y-2">
        <div className="flex items-center justify-start gap-x-2 font-extralight">
          <Bullet />
          <span>شکل صفحه</span>
        </div>
        <div className="mr-3">{faceForm}</div>
      </div>
    );
  }
  function StrapMaterial({ strapMaterial }) {
    return (
      <div className="flex lg:flex-col gap-y-2">
        <div className="flex items-center justify-start gap-x-2 font-extralight">
          <Bullet />
          <span>جنس بدنه</span>
        </div>
        <div className="mr-3">{strapMaterial}</div>
      </div>
    );
  }