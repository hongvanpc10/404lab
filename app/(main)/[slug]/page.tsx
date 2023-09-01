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
					BOOTSTRAP LÀ GÌ? HƯỚNG DẪN DOWNLOAD VÀ CÀI ĐẶT BOOTSTRAP
				</Link>
			</div>

			<div className='pb-5 border-b border-gray-600'>
				<h1 className='text-4xl font-bold'>
					BOOTSTRAP LÀ GÌ? HƯỚNG DẪN DOWNLOAD VÀ CÀI ĐẶT BOOTSTRAP
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
				src='https://statics.cdn.200lab.io/2023/05/Thumbnails-Blog--1200---628-px---9-.jpg?auto=format,compress&width=1500'
				className='aspect-w-16 aspect-h-9'
			/>

			<div className='flex mt-16'>
				<div className='mr-6 w-9/12'>
					<TextEditorViewer
						content={`[Log] <p><strong>Bootstrap</strong> là một framework phổ biến phát triển website với những tính năng nổi bật như độ phản hồi, tương thích nhiều trình duyệt cùng với nhiều giao diện mẫu có sẵn, Bootstrap là một lựa chọn hữu ích cho các dự án phát triển web. Cùng <strong>200Lab</strong> tìm hiểu qua bài viết bên dưới để hiểu rõ hơn về Bootstrap nhé!</p><h2><strong>Bootstrap là gì?</strong></h2><img src="https://statics.cdn.200lab.io/2023/04/bootstrap-hero.jpeg" alt=""><p><strong>Bootstrap</strong> là một framework <strong>HTML, CSS </strong>và <strong>JavaScript</strong> miễn phí dùng để tạo website và web application. Bootstrap được phát triển bởi Mark Otto và Jacob Thornton của Twitter, giúp cho việc phát triển web trở nên nhanh chóng và dễ dàng hơn.</p><p>Chúng tương thích hoàn hảo với các trình duyệt (IE, Firefox và Chrome) và phù hợp với mọi kích cỡ màn hình (máy tính bàn, máy tính bảng, điện thoại). Với Bootstrap, người dùng không cần phải có kiến thức chuyên sâu về CSS hay HTML để thiết kế một trang web đẹp và hiệu quả.</p><h2><strong>Tại sao chúng ta nên sử dụng Bootstrap?</strong></h2><img src="https://statics.cdn.200lab.io/2023/04/bootstrap-responsive.png" alt=""><p>Chúng ta có thể dễ dàng thao tác, tạo kiểu màu văn bản, màu nền, phông chữ, flex, hệ thống lưới,... cho bất kỳ trang web nào nhờ vào Bootstrap.</p><p>Hiện nay có rất nhiều CSS framework khác như Tailwind CSS , Bulma và Foundation nhưng trong số đó, Bootstrap là framework được sử dụng phổ biến nhất vì các tính năng sau:</p><ul><li><p><strong>Tiết kiệm thời gian và công sức</strong>: Bootstrap cung cấp cho người dùng các công cụ và tài nguyên để tạo ra các giao diện trang web đáp ứng nhanh chóng và dễ dàng. Việc sử dụng Bootstrap giúp giảm thiểu thời gian và công sức mà người dùng phải bỏ ra để thiết kế trang web.</p></li><li><p><strong>Responsive</strong>: Bootstrap xây dựng reponsive CSS trên các thiết bị Iphones, tablets, và desktops. Chúng sẽ tự động thích ứng với kích thước màn hình của thiết bị người dùng.</p></li><li><p><strong>Tiêu chuẩn hóa</strong>: Bootstrap được phát triển bởi Twitter, đây là một tiêu chuẩn được nhiều người sử dụng và có thể được tùy chỉnh để phù hợp với nhu cầu thiết kế của từng trang web.</p></li><li><p><strong>Thư viện linh hoạt</strong>: Bootstrap cung cấp một loạt các thành phần giao diện, ví dụ như bảng, biểu đồ,... giúp người dùng thiết kế trang web dễ dàng hơn.</p></li><li><p><strong>Dễ sử dụng</strong>: Bootstrap dễ học và sử dụng, vì vậy người dùng không cần phải có kiến thức chuyên sâu về CSS hay HTML để bắt đầu thiết kế một trang web.</p></li><li><p><strong>Framework nguồn mở và miễn phí</strong>: có sẵn trên <a target="_blank" rel="noopener noreferrer nofollow" href="https://getbootstrap.com/">www.getbootstrap.com</a></p></li></ul><h2><strong>Hướng dẫn download và cài đặt Bootstrap</strong></h2><p>Có 2 cách để bạn có thể sử dụng Bootstrap trên web của bạn.</p><h3><strong>Download Bootstrap packet từ getbootstrap.com</strong></h3><ul><li><p>Truy cập <a target="_blank" rel="noopener noreferrer nofollow" href="https://getbootstrap.com/">www.getbootstrap.com</a> và click vào Getting Started. Sau đó click vào Download Bootstrap.</p></li></ul><img src="https://statics.cdn.200lab.io/2023/04/74.png" alt=""><ul><li><p>Tệp A.zip sẽ được tải xuống. Giải nén tệp zip và chuyển đến thư mục có chứa tên CSS và JS.</p></li></ul><pre><code>&lt;link rel=”stylesheet” type=”text/css” href=”css/bootstrap.min.css”&gt;&lt;script src=”js/bootstrap.min.js”&gt; &lt;/script&gt;&lt;script src=”https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js”&gt;&lt;/script&gt;</code></pre><ul><li><p>Thêm liên kết tệp vào HTML document, sau đó mở trang web bằng trình duyệt web.</p></li></ul><p><strong>Ví dụ</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt; (526-9f5270712f6181c8.js, line 1)
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;

    &lt;!-- Bootstrap CSS library --&gt;
    &lt;link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"&gt;

    &lt;!-- JavaScript library --&gt;
    &lt;script src="js/bootstrap.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class="container text-center"&gt;
        &lt;!-- Text color class used --&gt;
        &lt;h1 class="text-success"&gt;200Lab&lt;/h1&gt;
        &lt;p&gt;Learn Deep, Go Different&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre><p><strong>Output</strong></p><img src="https://statics.cdn.200lab.io/2023/04/Screenshot-2023-04-10-at-10.57.33-2.png" alt=""><h3><strong>Thêm Bootstrap thông qua CDN link</strong></h3><pre><code>&lt;!– CSS library –&gt;
&lt;link rel=”stylesheet” href=”https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css” integrity=”sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T” crossorigin=”anonymous”&gt;

&lt;!– jQuery library –&gt;
&lt;script src=”https://code.jquery.com/jquery-3.3.1.slim.min.js” integrity=”sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo” crossorigin=”anonymous”&gt;&lt;/script&gt;

&lt;!– JavaScript library –&gt;
&lt;script src=”https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js” integrity=”sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1″ crossorigin=”anonymous”&gt;&lt;/script&gt;

&lt;!– Latest compiled JavaScript library –&gt;
&lt;script src=”https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js” integrity=”sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM” crossorigin=”anonymous”&gt;&lt;/script&gt;

</code></pre><p><strong>Ví dụ</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
 
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport"
          content="width=device-width, initial-scale=1"&gt;
 
    &lt;!-- Bootstrap CSS library --&gt;
    &lt;link rel="stylesheet"
          href=
"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity=
"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"&gt;
 
    &lt;!-- jQuery library --&gt;
    &lt;script src=
"https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity=
"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"&gt;
    &lt;/script&gt;
 
    &lt;!-- JavaScript library --&gt;
    &lt;script src=
"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity=
"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"&gt;
            &lt;/script&gt;
 
    &lt;!-- Latest compiled JavaScript library --&gt;
    &lt;script src=
"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity=
"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"&gt;
    &lt;/script&gt;
&lt;/head&gt;
 
&lt;body&gt;
    &lt;div class="container text-center"&gt;
        &lt;!-- Text color class used --&gt;
        &lt;h1 class="text-success"&gt;GeeksforGeeks&lt;/h1&gt;
        &lt;p&gt;A computer science portal for geeks&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
 
&lt;/html&gt;</code></pre><p><strong>Output</strong></p><img src="https://statics.cdn.200lab.io/2023/04/Screenshot-2023-04-10-at-10.57.33-1.png" alt=""><h2><strong>Bootstrap 5 có gì mới?</strong></h2><img src="https://statics.cdn.200lab.io/2023/04/f1ce6a0af5cb.jpg.png" alt=""><p>Phiên bản mới nhất của Bootstrap là <strong>Bootstrap 5</strong>, được phát hành vào tháng 5 năm 2021. <strong>Bootstrap 5</strong> có nhiều cải tiến và tính năng mới hơn so với phiên bản Bootstrap 4 như:</p><ul><li><p><strong>Xóa jQuery</strong>: <strong>Bootstrap 5</strong> đã loại bỏ hoàn toàn jQuery được sử dụng trong phiên bản trước đó và sử dụng <strong>Vanilla JavaScript</strong> thay thế. Điều này giúp giảm kích thước tệp và cải thiện tốc độ tải trang.</p></li><li><p><strong>Cải tiến khả năng linh hoạt</strong>: sử dụng <strong>CSS Flexbox</strong> và <strong>Grid</strong> để giúp tạo các mốt layout linh hoạt phù hợp với kích thước màn hình khác nhau.</p></li><li><p><strong>Nâng cao tính tương thích với thiết bị di động</strong>: có tính năng mới là <strong>Mobile-first CSS</strong>, giúp cho trang web tương thích và hiển thị tốt trên các thiết bị di động như điện thoại di động, máy tính bảng, và desktop.</p></li><li><p><strong>Tính năng mới</strong>: có các tính năng mới như <strong>Scrollspy, offcanvas, reset CSS</strong>,...</p></li><li><p><strong>Cải tiến về tốc độ tải trang</strong>: Bootstrap 5 giảm kích thước tệp và sử dụng các tính năng hiệu suất như cache, preloading và nén tệp để giúp tăng tốc độ tải trang.</p></li><li><p><strong>Thân thiện với các trình duyệt</strong>: Bootstrap 5 tương thích với các trình duyệt mới nhất và các trình duyệt cũ bao gồm Internet Explorer 11.</p></li><li><p><strong>Cải tiến khả năng tùy biến</strong>: cải tiến khả năng tùy biến bằng cách sử dụng CSS Variable và Sass.</p></li></ul><p><strong>Bootstrap 5</strong> là phiên bản mới nhất của Bootstrap và có nhiều cải tiến và tính năng mới giúp cho việc phát triển trang web trở nên dễ dàng, linh hoạt hơn và hiệu quả hơn.</p><h2><strong>Lời kết</strong></h2><p><strong>200Lab</strong> hy vọng thông qua bài viết trên bạn đã nắm được <strong>Bootstrap</strong> là một framework cực kỳ hữu ích trong việc phát triển website. Với các tính năng đa dạng và thiết kế linh hoạt, Bootstrap giúp tăng tốc độ phát triển, cải thiện trải nghiệm người dùng và đảm bảo tính tương thích trên nhiều nền tảng khác nhau.</p>`}
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
