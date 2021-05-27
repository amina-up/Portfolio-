import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        
        <h1 className="title">
        web developer portfolio
        </h1>
        <br></br>

<p> I am an enthusiastic, self-motivated,
reliable, responsible and hard working
person. I am a mature team worker and
adaptable to all challenging situations

   </p>
          <br />
       
      </main>
      <div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="carousel slide" id="carousel-710910">
				<ol class="carousel-indicators">
					<li data-slide-to="0" data-target="#carousel-710910" class="active">
					</li>
					<li data-slide-to="1" data-target="#carousel-710910">
					</li>
					<li data-slide-to="2" data-target="#carousel-710910">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100 " alt="Carousel Bootstrap First" src="/slider1.jpeg" />
						<div class="carousel-caption">
							<h4>
							I am a full-stack web developer 
							</h4>
							<p>
              UI/UX javascript specialist.Check out my articles,
							</p> 
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" alt="Carousel Bootstrap Second" src="/slider2.jpeg" />
						<div class="carousel-caption">
							<h4>
            React js Vue js and UI components 
							</h4>
							<p>
              Feel free to take a look at my latest projects on the web portfolio page.
							</p> 
						</div>
					</div>
				
				</div> <a class="carousel-control-prev" href="#carousel-710910" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-710910" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
			</div>
		</div>
	</div>
</div>

    </div>
  );
}