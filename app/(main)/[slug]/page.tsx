import { BlogCardHorizontal } from '@/components/blogCard'
import Image from '@/components/image'
import TextEditorViewer from '@/components/textEditor/textEditorViewer'
import Textarea from '@/components/textarea'
import Title from '@/components/title'
import routes from '@/configs/routes'
import moment from 'moment'
import Link from 'next/link'

export default function BlogDetail() {
	return (
		<div>
			<div className='flex mb-10 items-center text-[0.9375rem] text-gray-400'>
				<Link href={routes.home} className='flex items-center'>
					<i className='ri-home-4-fill mr-2'></i>
				</Link>
				<span className='mx-2.5'>/</span>
				<Link href={''} className='text-emerald-500'>
					Web Developer là gì? Tìm hiểu về Web Development A - Z
				</Link>
			</div>

			<div className='pb-5 border-b border-gray-600'>
				<h1 className='text-4xl font-bold'>
					Web Developer là gì? Tìm hiểu về Web Development A - Z
				</h1>

				<div className='flex items-center justify-between mt-4 text-sm text-gray-400'>
					<div className='flex items-center'>
						Đăng bởi
						<Link href={''} className='text-emerald-500 ml-1.5'>
							Hồng Văn
						</Link>
						<span className='mx-2.5'>|</span>
						{moment().format('D [thg] M, YYYY')}
					</div>

					<span className='flex items-center'>
						<i className='ri-time-line mr-2'></i>
						10 phút đọc
					</span>
				</div>
			</div>

			<div className='flex items-center mt-6 mb-10'>
				<span className='text-gray-400 mr-4'>Chia sẻ bài viết:</span>
				<div className='flex items-center space-x-3'>
					<button className='bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-1.5'>
						<i className='ri-facebook-fill'></i>
					</button>
					<button className='bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-1.5'>
						<i className='ri-github-fill'></i>
					</button>
					<button className='bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-1.5'>
						<i className='ri-linkedin-fill'></i>
					</button>
					<button className='bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-1.5'>
						<i className='ri-file-copy-line'></i>
					</button>
				</div>
			</div>

			<Image
				alt=''
				src='https://statics.cdn.200lab.io/2023/08/nextjs_thumbnail.png?auto=format,compress&width=1500'
				className='aspect-w-16 aspect-h-9'
			/>

			<div className='flex mt-16'>
				<div className='mr-6 w-9/12'>
					<TextEditorViewer
						content={
							`<h2><strong>1. NextJS là gì?</strong></h2><img src="https://statics.cdn.200lab.io/2023/08/nextjsusedby.jpg"><p>NextJS là framework mã nguồn mở được xây dựng trên nền tảng của React, cho phép chúng ta xây dựng các trang web tĩnh có tốc độ siêu nhanh và thân thiện với người dùng, cũng như xây dựng các ứng dụng web React.</p><p>NextJS được ra đời vào năm 2016, thuộc sở hữu của <a target="_blank" rel="noopener noreferrer nofollow" href="https://vercel.com/">Vercel</a>. NextJS bắt đầu trở nên phổ biến vào năm 2018 và tiếp tục tăng trưởng mạnh mẽ trong cộng đồng phát triển web vào những năm sau đó. Sự kết hợp của các tính năng như Server-side Rendering (SSR) với Static Site Generation (SSG) đã giúp NextJS trở thành sự lựa chọn hấp dẫn cho nhiều dự án phát triển ứng dụng web.</p><h2><strong>2. Các tính năng chính của NextJS</strong></h2><h3><strong>2.1 &nbsp;Routing</strong></h3><h4><strong>2.1.1 Automatic Routing</strong></h4><p>NextJS sẽ tự động tạo các router dựa trên cấu trúc thư mục của chúng ta. Ví dụ, nếu bạn tạo một file có tên là <code>about.js</code> ở thư mục <code>pages</code>. NextJS sẽ tạo router là <code>/about</code>.</p><h4><strong>2.1.2 Nested Routing</strong></h4><p>Chúng ta có thể tạo các thư mục con để tạo các router lồng nhau. Ví dụ, nếu bạn tạo một folder có tên <code>blog</code> nằm trong folder <code>pages</code>, bên trong folder <code>blog</code> lại có file <code>post.js</code>, đường dẫn sẽ là <code>pages/blog/post.js</code>, thì router mà NextJS tạo ra sẽ là <code>/blog/post</code>.</p><h4><strong>2.1.3 Dynamic Routes</strong></h4><p>Bạn có thể tạo các router động bằng cách sử dụng cặp dấu <code>[]</code> trong tên file. Ví dụ nếu đường dẫn là <code>pages/blog/[slug].js</code> thì NextJS sẽ tạo ra các router như <code>/blog/blog-dau-tien</code> hoặc <code>/blog/blog-thu-hai</code>. Với <code>slug</code> là một giá trị bất kì do bạn truyền vào.</p><h4><strong>2.1.4 Link Component</strong></h4><p>Để tạo liên kết giữa các trang, bạn sử dụng component <code>Link</code> được cung cấp sẵn bởi NextJS ở thư viện <code>next/link</code>. Sử dụng <code>Link</code> &nbsp;thay cho thẻ <code>a</code> giúp tránh việc tải lại trang và tối ưu hóa hiệu suất.</p><h4><strong>2.1.5 Query Parameters</strong></h4><p>Bạn có thể truyền dữ liệu giữa các trang sử dụng query parameters trong router bằng cách sử dụng ký tự dấu chấm hỏi <code>?</code> trong tên file. Ví dụ, <code>pages/product.js</code> có thể có các router như <code>/product?productId=0001</code>.</p><p>Một ví dụ trực quan hơn là giả sử bạn có một file <code>product.js</code> có nội dung như sau:</p><pre><code>// pages/product.js (526-9f5270712f6181c8.js, line 1)
import { useRouter } from 'next/router'; 

function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    &lt;div&gt;
      &lt;h1&gt;Product Details&lt;/h1&gt;
      &lt;p&gt;Product ID: {productId}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default ProductPage;</code></pre><p>Khi người dùng truy cập vào địa chỉ <code>/product?productId=123</code>, NextJS sẽ định tuyến bạn đến trang <code>/product</code>, và ở trang này bạn sẽ nhận được giá trị cuả <code>productId</code> mà bạn truyền vào. &nbsp;</p><p>Các bạn có thể tạo một file để chuyển hướng sang trang <code>/product</code> như sau:</p><pre><code>// pages/index.js
import Link from 'next/link';

function HomePage() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome to the Store&lt;/h1&gt;
      &lt;Link href="/product?productId=123"&gt;View Product 123&lt;/Link&gt;
      &lt;Link href="/product?productId=456"&gt;View Product 456&lt;/Link&gt;
    &lt;/div&gt;
  );
}

export default HomePage;</code></pre><p>Hoặc sử dụng hook có tên là <code>useRouter</code> được cung cấp sẵn bởi <code>next/router</code></p><pre><code>// pages/index.js
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const goToProduct = (productId) =&gt; {
    router.push({
      pathname: '/product',
      query: { productId },
    });
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome to the Store&lt;/h1&gt;
      &lt;button onClick={() =&gt; goToProduct(123)}&gt;View Product 123&lt;/button&gt;
      &lt;button onClick={() =&gt; goToProduct(456)}&gt;View Product 456&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default HomePage;</code></pre><h3><strong>2.2 Rendering</strong></h3><h4><strong>2.2.1 Server-side Rendering (SSR)</strong></h4><h5><strong>2.2.1.1 SSR là gì?</strong></h5><p>Từ những năm 2000, SSR đã được sử dụng rất phổ biến, gọi nó là SSR vì hầu hết các logic phức tạp trên trang web sẽ được xử lý ở phía server.</p><img src="https://statics.cdn.200lab.io/2023/08/ssr.png"><p><strong>Cơ chế của SSR như sau:</strong></p><ul><li><p>Khi user truy cập vào một trang web, trình duyệt sẽ gửi request tới server</p></li><li><p>Server sẽ nhận request, truy cập vào dữ liệu trong database, render ra HTML</p></li><li><p>Trả HTML kèm với CSS, JS về cho browser</p></li><li><p>Browser nhận được HTML thì tiến hành tải xuống và render ra UI nhưng lúc này chưa có JS</p></li><li><p>Browser tải xuống JS và thực thi các câu lệnh JS</p></li><li><p>Website load xong và có thể tương tác bình thường</p></li></ul><p><strong>Ưu điểm của SSR</strong>:</p><ul><li><p>Load lần đầu nhanh vì toàn bộ dữ liệu đã được xử lý ở phía server, client chỉ cần nhận về và hiển thị ra cho user</p></li><li><p>Tốt cho SEO vì dữ liệu được render dưới dạng HTML (bạn ấn chuột phải chọn View Page Source một trang web bất kì là sẽ thấy điều này), giúp cho bot của Google khi quét sẽ thấy được toàn bộ dữ liệu</p></li><li><p>Lập trình viên chỉ cần code trên 1 project là đã có thể tạo ra trang web hoàn chỉnh có cả Frontend lẫn Backend, không cần tách ra làm 2 project.</p></li></ul><p><strong>Nhược điểm</strong> <strong>của SSR</strong>:</p><ul><li><p>Server sẽ phải xử lý nhiều dữ liệu dẫn đến quá tải</p></li><li><p>Khi user chuyển trang thì cả trang sẽ phải load lại để lấy dữ liệu từ server, dẫn đến trải nghiệm không tốt</p></li></ul><p>Hiện tại vẫn còn rất nhiều website đang sử dụng SSR như các website được xây dựng bằng Wordpress, các trang bán hàng lâu đời như thegioididong,...</p><p>Vì những nhược điểm nêu trên mà đến năm 2010, sự phát triển của JavaScript đã tiến thêm một bước nữa khi Client-side Rendering ra đời, nhằm khắc phục những nhược điểm của SSR.</p><h5><strong>2.2.1.2 Client-side Rendering (CSR)</strong></h5><p>Sở dĩ nó được gọi là CSR vì việc render HTML sẽ được thực thi ở phía client. Hay chúng ta còn gọi là Single Page App (SPA).</p><img src="https://statics.cdn.200lab.io/2023/08/csr.png"><p><strong>Ưu và nhược điểm của CSR:</strong></p><p>Ưu điểm:</p><ul><li><p>Chuyển việc xử lý dữ liệu sang cho client giúp server nhẹ việc hơn</p></li><li><p>Trang chỉ cần load một lần duy nhất, khi user muốn lấy dữ liệu mới từ server chỉ cần gọi đến server thông qua AJAX</p></li><li><p>Trang web không cần load lại nhiều khi user chuyển trang, đem đến trải nghiệm tốt hơn cho người dùng</p></li></ul><p>Tuy nhiên thì CSR vẫn còn một số nhược điểm:</p><ul><li><p>Load trang lần đầu sẽ chậm hơn SSR nếu không tối ưu. Do browser phải tải toàn bộ HTML và JS ở lần đầu load trang, chạy JS và gọi API để lấy dữ liệu từ server rồi mới render lên UI cho user.</p></li><li><p>Lập trình viên phải chia ra làm 2 project: Backend để viết API và Frontend để hiển thị</p></li><li><p>Website không thể chạy nếu tắt JavaScript ở trình duyệt</p></li><li><p>Nếu user sử dụng thiết bị có cấu hình yếu thì sẽ bị load chậm</p></li><li><p>SEO không tốt bằng SSR do dữ liệu được render bởi JS là dữ liệu động</p></li></ul><p>Bạn sẽ thấy CSR thường được sử dụng trong các ứng dụng web cần sự tương tác nhiều, các ứng dụng này chủ yếu được xây dựng bằng ReactJS hay VueJS, AngularJS.</p><p>Chính vì những nhược điểm của CSR mà NextJS ra đời, NextJS là sự kết hợp cả SSR lẫn CSR để tạo nên website có trải nghiệm tuyệt vời nhất.</p><h5><strong>2.2.1.3 SSR trong NextJS</strong></h5><p>Cách SSR hoạt động bên trong NextJS:</p><ul><li><p>Khi user truy cập vào một trang sử dụng SSR của NextJS, browser sẽ gửi một request đến server</p></li><li><p>Trước khi gửi kết quả ra trình duyệt, NextJS chạy hàm <code>getServerSideProps()</code> để lấy dữ liệu cần thiết cho trang. Hàm này thường sẽ dùng để gọi API hoặc truy vấn vào cơ sở dữ liệu để lấy dữ liệu cần thiết.</p></li><li><p>Với dữ liệu cần thiết đã được lấy từ bước trước, NextJS tạo ra một phiên bản đã` +
							`
 render đầy đủ cả nội dung và dữ liệu. Sau đó trả phiên bản này ra browser dưới dạng HTML</p></li><li><p>Browser nhận được code HTML từ server và hiển thị lên giao diện. Nội dung của trang sẽ được hiển thị ngay lập tức, sau đó JS được tải xuống và đổ lên để trang có thể tương tác được, ví dụ như hàm <code>onClick()</code>. &nbsp;</p></li></ul><h4><strong>2.2.2 Static Site Generation (SSG)</strong></h4><p>SSG là một phương pháp mà NextJS cung cấp sẵn cho chúng ta, cho phép bạn tạo các trang tĩnh và lưu chúng xuống dưới dạng file html tĩnh. Điều này giúp cải thiện hiệu suất tải trang và cung cấp trải nghiệm người dùng tốt hơn vì nội dung được lấy từ file html và hiển thị ngay lập tức mà không cần đợi việc tải về từ phía server.</p><img src="https://statics.cdn.200lab.io/2023/08/ssg.png"><p>Khi bạn chạy lệnh <code>next build</code>, NextJS sẽ chạy hàm <code>getStaticProps</code> để lấy dữ liệu cần thiết. Với dữ liệu lấy được, NextJS sẽ tạo ra các phiên bản đã được render, lưu chúng trong thư mục <code>.next</code>, và hiển thị lên khi user truy cập.</p><h3><strong>2.3 Styling</strong></h3><h4><strong>2.3.1 CSS Modules</strong></h4><p>Để style cho ứng dụng NextJS, cách dễ nhất là bạn có thể tạo các file <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/css-la-gi/">CSS/SCSS</a> riêng lẻ cho từng component hoặc sử dụng file chung cho toàn dự án.</p><p>Ví dụ:</p><pre><code class="language-css">// styles.module.css
.myButton {
  background-color: blue;
  color: white;
}</code></pre><pre><code>// MyComponent.js
import styles from './styles.module.css';

function MyComponent() {
  return &lt;button className={styles.myButton}&gt;Click me&lt;/button&gt;;
}</code></pre><h4><strong>2.3.2 CSS-in-JS Libraries</strong></h4><p>Ngoài ra bạn cũng có thể sử dụng các thư viện CSS-in-JS như <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/netflix-clone-with-reactjs-styled-components-and-firebase-firestore-auth/">Styled-Components</a> để viết trực tiếp css vào code.</p><pre><code>// MyComponent.js
import styled from 'styled-components';

{const StyledButton = styled.button\`
  background-color: blue;
  color: white;
\`;}

function MyComponent() {
  return &lt;StyledButton&gt;Click me&lt;/StyledButton&gt;;
}</code></pre><h4><strong>2.3.3 CSS Frameworks</strong></h4><p>NextJS cũng hỗ trợ sử dụng cùng các CSS framework như TailwindCSS, Bootstrap hoặc MaterialUI.</p><p>Trên 200lab cũng đã có bài viết hướng dẫn cách <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/huong-dan-cai-dat-tailwind-css-co-ban/">cài đặt và sử dụng TailwindCSS</a> với <a target="_blank" rel="noopener noreferrer nofollow"
` +
							` href="https://200lab.io/blog/bootstrap-la-gi/">Bootstrap</a>, các bạn có thể tham khảo qua nhé.</p><h2><strong>3. Tại sao nên sử dụng NextJS?</strong></h2><p>NextJS hiện tại đang được sử dụng ở rất nhiều dự án khác nhau, sở dĩ NextJS được tin dùng như vậy là vì một số lý do sau:</p><ul><li><p>Sử dụng SSR và SSG: Giúp cải thiện tốc độ tải trang và khả năng SEO.</p></li><li><p>Có nhiều tính năng giúp tối ưu hoá hiệu suất như Code Splitting, Lazy Loading, Image Optimization,...</p></li><li><p>Fast Refresh: Tính năng giúp tự động làm mới giao diện mà không cần load lại toàn bộ trang.</p></li><li><p>Tự động tạo file CSS dành riêng cho mỗi trang, giúp tránh xung đột trong việc sử dụng và quản lý các file CSS.</p></li><li><p>Hỗ trợ TypeScript: NextJS cũng hỗ trợ sử dụng Typescript giúp cải thiện tính rõ ràng cho code và thuận tiện cho việc debug về sau.</p></li><li><p>Cộng đồng lớn: NextJS có một cộng đồng sử dụng đông đảo, điều này được chứng minh ở trên chính <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/vercel/next.js">trang Github của NextJS</a> khi nó đang đạt khoảng hơn 100k sao. Điều này giúp cho NextJS có thêm nhiều nguồn tài liệu phong phú và các plugin hữu ích.</p></li><li><p>Hệ sinh thái mạnh mẽ: NextJS kết hợp tốt với các thư viện và công cụ như Redux, React Query, Apollo Client và nhiều thư viện khác nằm trong hệ sinh thái của React.</p></li><li><p>Tích hợp tốt với React: Nếu bạn đã quen với việc sử dụng React trước đó thì việc làm quen với NextJS sẽ đơn giản hơn rất nhiều.</p></li></ul><h2><strong>4. Nhược điểm của NextJS</strong></h2><p>Mặc dù có nhiều ưu điểm nêu trên, NextJS vẫn có những khuyết điểm nên chúng ta cần xem xét trước khi sử dụng nó:</p><ul><li><p>Khó học cho người mới: Nếu bạn chưa có hiểu biết cơ bản về <a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web">Web Fundamentals</a>, JavaScript và React thì việc học NextJS sẽ hơi khó khăn. Nhất là khi bạn gặp các khái niệm như SSR hay SSG.</p></li><li><p>Khó khăn trong việc tích hợp với một số thư viện bên ngoài: Một số thư viện và plugin có thể cần phải điều chỉnh hoặc tùy chỉnh để hoạt động tốt với Next.js. Ví dụ như để sử dụng <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/redux-la-gi/">Redux</a> trong ứng dụng NextJS, các bạn cần cài thêm thư viện <code>next-redux-wrapper</code> để quản lý state trên cả server và client.</p></li><li><p>Phụ thuộc vào hệ sinh thái của React: Next.js phụ thuộc vào React, vì vậy nếu bạn không quen thuộc với React hoặc không muốn sử dụng React thì NextJS không phải là lựa chọn tốt.</p></li><li><p>Đòi hỏi chạy trên server NodeJS: Để deploy ứng dụng NextJS, bạn cần có một máy chủ NodeJS, việc này có thể làm tăng chi phí và quá trình triển khai sẽ trở nên phức tạp hơn.</p></li><li><p>Cấu trúc dự án phức tạp: Với các dự án lớn, việc quản lý cấu trúc dự án không cẩn thận lúc ban đầu sẽ dẫn đến việc khó quản lý sau này.</p></li></ul><p>Tuỳ vào tính chất của dự án và yêu cầu mà các bạn có thể cân nhắc có nên sử dụng NextJS trong dự án của mình hay không. Một số dự án thường được sử dụng NextJS để triển khai như: Trang tin tức, Blog, Landing Page,...</p><p>Nhìn chung thì website nào cần khả năng SEO tốt nhưng vẫn đem lại trải nghiệm mượt mà cho người dùng thì sẽ được cân nhắc sử dụng NextJS.</p><h2><strong>5. Hướng dẫn sử dụng NextJS</strong></h2><h3><strong>Bước 1. Chuẩn bị môi trường</strong></h3><p>Trước tiên, bạn cần cài đặt <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/so-sanh-golang-vs-nodejs/">NodeJS</a> và npm (hoặc yarn) vào máy của mình. Các bạn có thể cài NodeJS ở trang chủ của <a target="_blank" rel="noopener noreferrer nofollow" href="https://nodejs.org/en">NodeJS</a> hoặc cài thông qua thư viện nvm.</p><p>Về IDE thì các bạn có thể dùng Visual Studio Code để code.</p><h3><strong>Bước 2. Tạo một project NextJS mới</strong></h3><p>Để tạo một project NextJS mới, các bạn chạy câu lệnh sau:</p><pre><code>npx create-next-app@latest</code></pre><p>hoặc nếu bạn sử dụng yarn:</p><pre><code>yarn create next-app my-nextjs-app</code></pre><p>Sau đó chọn theo hướng dẫn:</p><pre><code>What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias? No / Yes
What import alias would you like configured? @/*</code></pre><h3><strong>Bước 3. Chạy project</strong></h3><p>Tiếp đến bạn di chuyển vào thư mục của project vừa tạo:</p><pre><code>cd my-nextjs-app</code></pre><p>Chạy lệnh sau để chạy project:</p><pre><code>npm run dev</code></pre><p>hoặc với yarn:</p><pre><code>yarn dev</code></pre><p>Sau khi chạy thành công, bạn sẽ thấy xuất hiện đường link ở local, thường sẽ là <code>http://localhost:3000</code>. Các bạn truy cập link này để thấy app của mình chạy trên browser.</p><h3><strong>Bước 4. Tạo các trang cho dự án</strong></h3><p>NextJS đã tạo sẵn cho chúng ta folder <code>pages</code> để tạo các trang cho dự án.</p><p><code>pages</code><strong> </strong>là nơi để bạn tạo router của ứng dụng mà mình đã nhắc đến ở phần 2 của bài này. Bên trong pages có 3 file quan trọng đó là: <em>app.js, </em>document.js, index.js</p><ul><li><p>_app.js: Là điểm khởi đầu của toàn ứng dụng. Ở file này bạn có thể đưa các thành phần layout như Header, Footer để chúng bọc tất cả các trang trên app. Hoặc <a target="_blank" rel="noopener noreferrer nofollow" href="https://200lab.io/blog/redux-la-gi/">Redux</a> Store cũng có thể bọc ở đây.</p></li><li><p><em>document.js: </em>document.js không phải là một trang riêng lẻ, nó là một tệp dùng để cấu hình các thẻ <code>html</code>, <code>head</code>, và các thẻ khác trong file html. Bạn có thể sửa đổi hoặc thêm các thẻ như <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, hay các đoạn CSS, JS liên quan đến toàn bộ trang web.</p></li><li><p>index.js: Đây chính là trang homepage của bạn, khi chúng ta truy cập vào địa chỉ trang chủ <code>http://localhost:3000</code>, NextJS sẽ tự động hiển thị nội dung từ file index.js</p></li><li><p>Folder <code>api</code>: Được sử dụng để tạo các API Routes trong NextJS, đây là tính năng vô cùng mạnh mẽ của NextJS cho phép bạn tạo các API Endpoint ở ngay trong ứng dụng NextJS của bạn. Ví dụ khi bạn tạo một file <code>my-api.js</code> bên trong <code>pages/api</code>, bạn có thể gọi đến endpoint này bằng cách sử dụng địa chỉ <code>http://localhost:3000/api/my-api</code>. Giả sử file <code>my-api.js</code> của bạn có nội dung như sau:</p></li></ul><pre><code>// pages/api/my-api.js
export default function handler(req, res) {
  const data = { message: 'This is an API response' };
  res.status(200).json(data);
}</code></pre><p>Khi truy cập vào <code>http://localhost:3000/api/my-api</code>, bạn sẽ nhận được response như sau:</p><pre><code>{ "message": "This is an API response" }</code></pre><h3><strong>Bước 5. Deploy ứng dụng</strong></h3><p>Có rất nhiều cách để deploy ứng dụng NextJS:</p><p>Cách phổ biến nhất cho những ứng dụng NextJS đơn giản là sử dụng <a target="_blank" rel="noopener noreferrer nofollow" href="https://vercel.com/">Vercel</a>. Bạn chỉ cần kết nối Vercel với tài khoản Github hay Bitbucket của bạn, Vercel sẽ tự động lo giúp bạn phần việc còn lại.</p><p>Để deploy ứng dụng NextJS lên Vercel, việc đầu tiên chúng ta cần làm là build ứng dụng.</p><p>Các bạn chạy lệnh sau để tiến hành build:</p><pre><code>npm run build</code></pre><p>hoặc nếu dùng yarn:</p><pre><code>yarn build</code></pre><p>Khi đã build xong chúng ta đẩy ứng dụng NextJS lên các nền tảng như Github, Gitlab hoặc Bitbucket.</p><p>Sau khi đẩy thành công, chúng ta <a target="_blank" rel="noopener noreferrer nofollow" href="https://vercel.com/login">đăng nhập vào Vercel</a> và chọn phương thức đăng nhập.</p><p>Sau khi đăng nhập thành công, bạn chọn <strong>Add New -&gt; Project</strong></p><img src="https://statics.cdn.200lab.io/2023/08/image-87.png"><p>Tìm đến Project bạn vừa đẩy lên và chọn Import</p><img src="https://statics.cdn.200lab.io/2023/08/image-81.png"><p>Ở mục <strong>Framework Preset</strong> các bạn chọn NextJS, các bạn có thể thay đổi các tùy chọn build ở mục <strong>Build and Output Settings</strong> rồi ấn <strong>Deploy.</strong></p><img src="https://statics.cdn.200lab.io/2023/08/image-82.png"><p>Chờ một lúc để Vercel tiến hành deploy. Nếu thành công Vercel sẽ chuyển bạn sang trang sau, các bạn chọn <strong>Continue to Dashboard</strong>:</p><img src="https://statics.cdn.200lab.io/2023/08/image-83.png" alt=""><p>Ở đây các bạn ấn Visit để xem trang web của mình sau khi được deploy</p><img src="https://statics.cdn.200lab.io/2023/08/image-84.png" alt=""><p>Ngoài Vercel thì còn có nhiều nền tảng khác giúp bạn deploy ứng dụng NextJS như: Netlify, AWS Amplify, Heroku, DigitalOcean,...</p><p>Hoặc nếu bạn sở hữu một webserver riêng như Apache hoặc Nginx thì cũng có thể deploy lên server của mình.</p><h2><strong>6. NextJS với ReactJS - Sự khác biệt giữa chúng</strong></h2><table><tbody><tr><th colspan="1" rowspan="1"><p>ReactJS</p></th><th colspan="1" rowspan="1"><p>NextJS</p></th></tr><tr><td colspan="1" rowspan="1"><p>Là thư viện được xây dựng dựa trên JavaScript</p></td><td colspan="1" rowspan="1"><p>Là framework xây dựng dựa trên ReactJS</p></td></tr><tr><td colspan="1" rowspan="1"><p>Được thiết kế để tập trung vào giao diện và tính tương tác của người dùng,</p><p> ứng dụng React thường được tạo ra nhiều component để tái sử dụng và có dữ liệu thay đổi thường xuyên.</p></td><td colspan="1" rowspan="1"><p>Được thiết kế để tập trung vào việc cải thiện hiệu suất và tối ưu hoá SEO bằng cách hỗ trợ SSR với SSG</p></td></tr><tr><td colspan="1" rowspan="1"><p>Không có hệ thống Routing mặc định. Phải sử dụng thêm library là react-router-dom.</p></td><td colspan="1" rowspan="1"><p>Hệ thống routing được tích hợp sẵn</p></td></tr><tr><td colspan="1" rowspan="1"><p>Phù hợp cho ứng dụng đơn trang (SPA - Single Page Application)</p></td><td colspan="1" rowspan="1"><p>Phù hợp cho ứng dụng đa trang và trang tĩnh</p></td></tr></tbody></table><h2><strong>7. Tổng kết</strong></h2><p>Qua bài viết này đã giúp các bạn hình dung được phần nào về NextJS. NextJS là một React framework phù hợp với nhiều kiểu dự án khác nhau, tuy nhiên cần phải dựa vào tính chất của dự án để quyết định xem có nên sử dụng NextJS hay không.</p><h2><strong>8. Tài liệu tham khảo</strong></h2><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://nextjs.org/">Trang chủ của NextJS</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering/">Blog Tôi đi code dạo</a></p></li></ul><table><tbody><tr></tr></tbody></table>`
						}
					/>
				</div>

				<div>
					<div className='space-y-16 sticky top-6'>
						<div>
							<Title className='!text-xl !mb-4'>Mục lục</Title>

							<ul className='space-y-2'>
								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>
										1. Avro là gì? Vì sao cần dùng Avro với
										Kafka
									</Link>
								</li>
								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>
										2. Schema Registry: Hiểu rõ hơn về cơ sở
										dữ liệu Schema
									</Link>
								</li>
								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>
										3. Thay đổi dữ liệu dễ dàng với Avro
										Schema Evolution
									</Link>
								</li>
								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>
										4. Schema Compatibility: Đảm bảo dữ liệu
										luôn đồng nhất
									</Link>
								</li>

								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>
										5. Thực hành Kafka cùng 200Lab nhé!
									</Link>
								</li>
								<li className='text-gray-300 text-[0.9375rem] transition hover:text-emerald-500'>
									<Link href={''}>6. Tổng kết</Link>
								</li>
							</ul>
						</div>

						<div className='grid grid-cols-3 bg-gray-900'>
							<Image
								alt=''
								src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80'
								className='aspect-w-14 aspect-h-16'
							/>

							<div className='col-span-2 p-4'>
								<h2 className='text-lg font-bold'>
									<Link href={''}>Hong Van</Link>
								</h2>
								<p className='mt-2 text-[0.9375rem] text-gray-300'>
									make impossible to possible
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='h-0.5 bg-gray-700 mt-14 mb-8' />

			<div className='flex items-center flex-wrap'>
				<Link
					href={''}
					className='py-1.5 px-4 transition rounded-sm hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#python
				</Link>
				<Link
					href={''}
					className='py-1.5 px-4 transition rounded-sm hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#tài liệu
				</Link>
			</div>

			<div className='max-w-3xl mt-16 mx-auto space-y-16'>
				<div>
					<Title>Bình luận</Title>

					<form className='flex flex-col items-end'>
						<Textarea
							placeholder='Viết bình luận của bạn tại đây'
							rows={4}
						/>
						<button className='px-6 rounded-sm py-2 mt-4 mr-4 transition hover:bg-amber-600 bg-emerald-500'>
							Bình luận
						</button>
					</form>
				</div>

				<div>
					<Title>Bài viết liên quan</Title>

					<div className='space-y-8'>
						<BlogCardHorizontal />
						<BlogCardHorizontal />
						<BlogCardHorizontal />
						<BlogCardHorizontal />
					</div>
				</div>
			</div>
		</div>
	)
}
