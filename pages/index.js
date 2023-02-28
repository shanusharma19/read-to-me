import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <div id='body' className="main light-bg position-relative main" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      <div className="container-fluid fixed-top web-header">
        <div className='row top-header align-items-center justify-content-center'>
         <div className="col">
          <h4 className="m-0 text-center text-white">ReadToMe</h4>
         </div>
        </div>
       </div>

<div class="container-fluid">
	<div class="row pb-5">
		<div id="homeSlider" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<h1 class="h4 slide-text font-weight-normal text-center py-3 px-2" data-aos="fade-up" data-aos-delay="50">Learn to read English better
with ReadToMe </h1>
					<img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/slide-img.svg" class="" alt="" data-aos="fade-up" data-aos-delay="100" />
				</div>
			</div>
		</div> 
	</div>
</div>

<div class="container-fluid" data-aos="fade-up" data-aos-delay="150">
	<div class="row pb-5">
		<div class="col text-center py-3">
			<a href="login" id="startNowLink" class="btn  btn-warning btn-lg rtr-btn">START NOW</a> 
		</div>
	</div>
</div>

</div>
</>
  )
}
