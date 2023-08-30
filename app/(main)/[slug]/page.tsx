import { BlogCardHorizontal } from '@/components/blogCard'
import Image from '@/components/image'
import Title from '@/components/title'
import routes from '@/configs/routes'
import { Apple, Clock, Copy, Facebook, Home, Instagram } from 'iconsax-react'
import moment from 'moment'
import Link from 'next/link'

export default function BlogDetail() {
	return (
		<div>
			<div className='flex mb-10 items-center text-[0.9375rem] text-gray-400'>
				<Link href={routes.home} className='flex items-center'>
					<Home size='1em' className='mr-2' variant='Bold' /> Home
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
						<Clock size='1.125em' className='mr-2' />
						10 phút đọc
					</span>
				</div>
			</div>

			<div className='flex items-center mt-6 mb-10'>
				<span className='text-gray-400 mr-4'>Chia sẻ bài viết:</span>
				<div className='flex items-center space-x-3'>
					<button className='bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Facebook size='1.25em' />
					</button>
					<button className='bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Instagram size='1.25em' />
					</button>
					<button className='bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Apple size='1.25em' />
					</button>
					<button className='bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Copy size='1.25em' />
					</button>
				</div>
			</div>

			<Image
				alt=''
				src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
				className='aspect-w-16 aspect-h-9 rounded'
			/>

			<div className='flex mt-16'>
				<div className='prose mr-6 w-9/12 prose-lg prose-emerald max-w-none'>
					<p>
						<strong>Bắt đầu với ngành lập</strong> trình thường rất
						dễ dàng, nhưng bạn cần nhiều hơn nữa để nâng cấp bản
						thân cũng như trình độ của bạn.
					</p>
					<p>
						Lập trình viên là người thiết kế và phát triển hệ thống
						phần mềm. Ngành lập trình là ngành có rất nhiều lĩnh vực
						bao gồm:{' '}
						<a href='https://200lab.io/blog/front-end-la-gi/'>
							Frontend
						</a>
						,{' '}
						<a href='https://200lab.io/blog/backend-la-gi/'>
							Backend
						</a>
						, Full-stack, hệ thống nhúng, v.v. Các lập trình viên
						thường làm việc với nhiều loại ngôn ngữ lập trình khác
						nhau. Chuyên môn của mỗi lập trình viên phụ thuộc vào kỹ
						năng của họ.
					</p>
					<p>
						Vì vậy, họ luôn cố gắng nâng cao kỹ năng của mình bằng
						cách thực hiện nhiều hoạt động khác nhau. Hiện nay có
						rất nhiều cách độc đáo để nâng cao kỹ năng của lập trình
						viên dựa trên từng lĩnh vực.{' '}
					</p>
					<p>
						Ví dụ: thực hành xử lý CSS sẽ rất tốt nếu bạn đang phát
						triển Frontend. Tuy nhiên, những nghề nghiệp lập trình
						khác nhau này có một quy trình chung được gọi là
						<a href='https://en.wikipedia.org/wiki/Systems_development_life_cycle'>
							{' '}
							Vòng đời phát triển phần mềm
						</a>
						.
					</p>
					<h2 id='1-vi-t-code-clean-d-c-v-ch-t-l-ng-cao'>
						1. Viết code clean, dễ đọc và chất lượng cao
					</h2>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2023/06/5-cach-cai-thien-ky-nang-lap-trinh.jpeg'
							alt=''
						/>
					</p>
					<p>Viết code clean, dễ đọc và chất lượng cao</p>
					<p>
						Là lập trình viên, chúng ta thường xuyên viết code. Các
						lập trình viên thường thêm, xóa hoặc sửa đổi các dòng
						code trong các dự án codebase của họ. Những sửa đổi
						source code đó cải thiện hoặc làm xấu đi codebase.{' '}
					</p>
					<p>
						Họ luôn cần cải thiện codebase của mình với những dòng
						code chất lượng, không có lỗi. Không nghi ngờ gì nữa,
						việc làm theo một hướng dẫn về cách code rõ ràng là điều
						bắt buộc. Nếu dự án của bạn vẫn không có hướng dẫn về
						cách viết code, bạn có thể đề xuất.
					</p>
					<p>
						Phát triển phần mềm là một hoạt động hợp tác khi làm
						việc nhóm chung với rất nhiều người khác. Nhiều lập
						trình viên thường cộng tác làm việc trên cùng một đoạn
						code. Một số lập trình viên có thể nhanh chóng áp dụng
						các patch cho các source code phức tạp do người khác
						viết. Mặt khác, một số lập trình viên phải vật lộn với
						các source code phức tạp.
					</p>
					<p>
						Do đó, bạn luôn cần phải viết code tự giải thích ngay cả
						khi bạn đang triển khai một logic hoàn toàn phức tạp.
						Các mẫu thiết kế chính xác, cấu trúc thư mục, phân tách
						mô-đun giúp chúng ta viết code sạch.{' '}
					</p>
					<blockquote>
						<p>
							Ví dụ: xem cách nhóm Chromium tổ chức bộ điều khiển
							UI của trình duyệt để giảm độ phức tạp.
						</p>
					</blockquote>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2021/07/1-Q7vyGwLVumx_ounzHyUx3Q.png'
							alt=''
						/>
					</p>
					<p>
						Các phần tử UI được tổ chức tốt trong source Chromium.
					</p>
					<h2 id='2-u-ti-n-performance-ng-d-ng'>
						2. Ưu tiên Performance ứng dụng
					</h2>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2023/06/5-cach-cai-thien-ky-nang-lap-trinh.jpg'
							alt=''
						/>
					</p>
					<p>Ưu tiên performance ứng dụng</p>
					<p>
						Lập trình viên phải viết code tốt hơn để gây ấn tượng
						(impress) với phần cứng (hardware) và các lập trình viên
						khác bằng cách viết code clean. Chúng ta phải viết code
						hoạt động tốt với thời gian và không gian để impress với
						hardware. Có nhiều cách khác nhau để giải quyết cùng một
						vấn đề kỹ thuật phần mềm.{' '}
					</p>
					<p>
						Cách thức ưu tiên hiệu năng thúc đẩy bạn chọn giải pháp
						thiết thực và hiệu quả nhất. Hiệu năng vẫn là yếu tố
						quan trọng bất kể đó là cá modern hardware vì các vấn đề
						hiệu năng nhỏ tích lũy dần có thể ảnh hưởng xấu đến toàn
						bộ hệ thống phần mềm trong tương lai.
					</p>
					<p>
						Việc đưa ra các giải pháp cho hardware đòi hỏi kiến
						​​thức cơ bản về khoa học máy tính. Lý do là các nguyên
						tắc cơ bản về khoa học máy tính dạy chúng ta về cách sử
						dụng các cấu trúc dữ liệu và thuật toán phù hợp. Lựa
						chọn cấu trúc dữ liệu và thuật toán phù hợp là chìa khóa
						thành công cho mọi dự án kỹ thuật phần mềm phức tạp.{' '}
					</p>
					<p>
						Một số vấn đề về hiệu năng có thể ẩn trong codebase. Bên
						cạnh đó, các test case hiệu năng của bạn có thể không
						bao gồm các trường hợp đó. Mục tiêu của bạn phải là áp
						dụng các patch hiệu năng khi bạn phát hiện ra vấn đề như
						vậy.‌‌
					</p>
					<blockquote>
						<p>
							Ví dụ: 200Lab đã tìm thấy patch hiệu năng sau đây từ
							source code của Git trên GitHub.
						</p>
					</blockquote>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2021/07/1-gMly6VGbplcjUrJQob3t6Q.png'
							alt=''
						/>
					</p>
					<p>Patch hiệu năng từ source code của Git</p>
					<h2 id='-3-am-hi-u-v-l-nh-v-c-m-b-n-ang-l-m-vi-c'>
						‌3. Am hiểu về lĩnh vực mà bạn đang làm việc
					</h2>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2023/06/5-cach-cai-thien-ky-nang-lap-trinh-1.png'
							alt=''
						/>
					</p>
					<p>Am hiểu về lĩnh vực mà bạn đang làm việc</p>
					<p>
						Các lập trình viên thường làm việc với nhiều loại dự án
						phần mềm khác nhau. Mỗi dự án phần mềm có thể thuộc các
						lĩnh vực khác nhau như chăm sóc sức khỏe, thương mại
						điện tử, điện toán đám mây, giáo dục và quy trình kinh
						doanh.{' '}
					</p>
					<p>
						Nếu bạn bị giới hạn trong một dự án phần mềm thì việc
						nâng cao kỹ năng của bạn sẽ bị hạn chế. Nói cách khác,
						nếu bạn biết từng chút về dự án của mình sau khi làm
						việc trong vài năm, việc phát triển hàng ngày sẽ trở nên
						rất dễ dàng nếu bạn làm việc với những thứ mới mẻ.
					</p>
					<p>
						Việc am hiểu lĩnh vực của dự án mà bạn thực hiện sẽ mở
						ra nhiều cơ hội học tập mới. Ai đó có thể tranh luận
						rằng kiến ​​thức lĩnh vực chỉ cần cho các nhà phân tích
						kinh doanh - không phải cho các nhà phát triển.{' '}
					</p>
					<p>
						Tuy nhiên, không thể lập trình đúng cách nếu chúng ta
						xem toàn bộ quy trình của hệ thống phần mềm là một hệ
						thống trừu tượng. Nếu chúng ta hiểu cả kỹ thuật và lĩnh
						vực, toàn bộ quá trình phát triển phần mềm sẽ trở nên rõ
						ràng và dễ dàng hơn.
					</p>
					<p>
						Các lập trình viên có thể đưa ra các giải pháp hoàn
						chỉnh khi họ am hiểu lĩnh vực của dự án mà họ đang thực
						hiện. Điều này có nghĩa là không ai sẽ giải quyết điều
						gì đó tốt hơn mà không nghiên cứu về nó.
					</p>
					<h2 id='4-t-m-hi-u-s-u-h-n-v-ki-n-tr-c-ng-d-ng'>
						4. Tìm hiểu sâu hơn về kiến trúc ứng dụng
					</h2>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2023/06/5-cach-cai-thien-ky-nang-lap-trinh-3.jpeg'
							alt=''
						/>
					</p>
					<p>Tìm hiểu sâu hơn về kiến trúc ứng </p>
					<p>
						Có rất nhiều mẫu kiến ​​trúc phần mềm: Layered,
						client-server, plug-in, kiến trúc pub/sub, v.v là những{' '}
						<a href='https://200lab.io/blog/design-patterns-hieu-dung-va-dung-dung/'>
							Software Design Pattern
						</a>{' '}
						(Mẫu thiết kế phần mềm) phổ biến được sử dụng hiện nay.
					</p>
					<p>
						Các kiến ​​trúc phần mềm thường phân toàn bộ dự án thành
						các dự án con để giảm độ phức tạp và để mở rộng khả năng
						bảo trì. Trong hầu hết các tình huống, lập trình viên
						không cần phải hiểu từng chút nhỏ về kiến ​​trúc dự án
						phần mềm để đóng góp cho dự án.{' '}
					</p>
					<p>
						Tuy nhiên, các lập trình viên phải hiểu rõ về kiến
						​​trúc của hệ thống phần mềm để có những đóng góp bổ
						sung. Ngoài ra, sự phát triển nghề nghiệp của một lập
						trình viên điển hình sẽ hướng tới vai trò Software
						Architect.‌‌
					</p>
					<p>
						Hơn nữa, các hệ thống phần mềm thường cần phải thường
						xuyên nâng cấp và cải tiến kiến ​​trúc dựa trên các yêu
						cầu mới.{' '}
					</p>
					<p>
						Ví dụ: khi sản phẩm Phần mềm như một dịch vụ (Software
						as a service) của bạn có người dùng mới từ các quốc gia
						khác nhau, bạn sẽ phải tích CDN (Content delivery
						networks). Biết rõ hơn về kiến ​​trúc hiện tại sẽ giúp
						bạn đề xuất những cải tiến kiến ​​trúc đáng kể cho dự
						án.
					</p>
					<p>
						Thật tuyệt khi nghiên cứu kiến ​​trúc của dự án ở một
						cấp độ cao mà bạn có thể giải thích kiến ​​trúc đó cho
						người khác hiểu. Bạn có thể tham khảo các bài giải thích
						về kiến trúc của Netflix để hiểu rõ hơn cách mà Netflix
						xây dựng kiến trúc phần mềm của họ.
					</p>
					<p>[</p>
					<p>
						A Design Analysis of Cloud-based Microservices
						Architecture at Netflix
					</p>
					<p>1. Introduction</p>
					<p>
						<img
							src='https://miro.medium.com/fit/c/152/152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png'
							alt=''
						/>
						The StartupCao Duc Nguyen
					</p>
					<p>
						<img
							src='https://miro.medium.com/max/720/1*0MHo_ywcTvh1IVjf1h9ezA.jpeg'
							alt=''
						/>
					</p>
					<p>
						](
						<a href='https://medium.com/swlh/a-design-analysis-of-cloud-based-microservices-architecture-at-netflix-98836b2da45f'>
							https://medium.com/swlh/a-design-analysis-of-cloud-based-microservices-architecture-at-netflix-98836b2da45f
						</a>
						)
					</p>
					<h2 id='5-tr-th-nh-m-t-ng-i-h-c-v-c-ng-nh-l-m-t-gi-o-vi-n'>
						5. Trở thành một người học và cũng như là một giáo viên
					</h2>
					<p>
						<img
							src='https://statics.cdn.200lab.io/2023/06/5-cach-cai-thien-ky-nang-lap-trinh-2-1.jpeg'
							alt=''
						/>
					</p>
					<p>Trở thành một người học và cũng như là một giáo viên</p>
					<p>
						Trong mọi lĩnh vực, quá trình học tập không bao giờ kết
						thúc. Tương tự, luôn có một cái gì đó mới để học mỗi
						ngày trong lĩnh vực lập trình. Nhiều lý thuyết, bài báo,
						tài liệu nghiên cứu và triển khai liên quan đến khoa học
						máy tính được xuất bản mỗi ngày. Lĩnh vực khoa học máy
						tính vẫn đang phát triển như bất kỳ lĩnh vực nào khác
						trên thế giới.{' '}
					</p>
					<p>
						Do đó, mỗi ngày, bạn sẽ tìm thấy thứ gì đó sẽ nâng cao
						kỹ năng của mình. Ví dụ: bạn có thể học một design
						pattern mới ngay hôm nay để nâng cao khả năng đọc code
						bạn viết hôm qua.
					</p>
					<p>
						Ngoài ra, giảng dạy là một cách tuyệt vời để ghi nhớ
						những gì bạn đã học. Bạn không cần phải giải thích mọi
						thứ về một giải pháp cụ thể cho một trình biên dịch -
						bởi vì nó chỉ quan tâm đến syntax code của bạn.{' '}
					</p>
					<p>
						Tuy nhiên, bạn phải giải thích hầu hết mọi thứ nếu bạn
						đang giải thích một giải pháp cụ thể cho một người nào
						đó. Vì vậy, trở thành một giáo viên cho một ai đó là một
						cách tuyệt vời để học một điều gì đó chuyên sâu.
					</p>
					<h2 id='l-i-k-t-'>Lời kết </h2>
					<p>
						Việc ưu tiên hiệu năng ứng dụng bị đánh giá thấp trong
						thế giới hiện đại do máy tính rất mạnh mẽ. Nhưng sức
						mạnh tính toán vẫn còn hạn chế. Do đó, các lập trình
						viên luôn cần phải đưa ra các giải pháp hiệu quả.‌‌Học
						liên tục là thực hành quan trọng nhất để trở thành
						chuyên gia trong lĩnh vực lập trình. Albert Einstein đã
						từng nói:
					</p>
					<blockquote>
						<p>Once you stop learning you start dying.</p>
					</blockquote>
				</div>

				<div>
					<div className='space-y-16 sticky top-6'>
						<div>
							<Title className='!text-xl !mb-4'>Mục lục</Title>

							<ul className='ml-2 space-y-1'>
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

						<div className='grid grid-cols-3 bg-gray-900 rounded'>
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
					className='py-1.5 px-4 rounded transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#python
				</Link>
				<Link
					href={''}
					className='py-1.5 px-4 rounded transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#tài liệu
				</Link>
			</div>

			<div className='max-w-3xl mt-16 mx-auto'>
				<Title>Bài viết liên quan</Title>

				<div className='space-y-8'>
					<BlogCardHorizontal />
					<BlogCardHorizontal />
					<BlogCardHorizontal />
					<BlogCardHorizontal />
				</div>
			</div>
		</div>
	)
}
