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
					<button className='bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<i className='ri-facebook-fill'></i>
					</button>
					<button className='bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<i className='ri-github-fill'></i>
					</button>
					<button className='bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<i className='ri-linkedin-fill'></i>
					</button>
					<button className='bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<i className='ri-file-copy-line'></i>
					</button>
				</div>
			</div>

			<Image
				alt=''
				src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
				className='aspect-w-16 aspect-h-9'
			/>

			<div className='flex mt-10'>
				<div className='mr-6 w-9/12'>
					<TextEditorViewer
						content={` <p>Trong quá trình làm việc với Git, các lập trình viên thường làm việc độc lập trên các nhánh (branch) khác nhau và để thống nhất code sau khi phát triển tính năng hoặc vá lỗi, cần tiến hành hợp nhất nhánh.</p><p>Hiện nay, khi cần tích hợp code từ nhánh này sang nhánh khác, Git hỗ trợ hai tập lệnh cho cùng một mục đích kết hợp công việc của nhiều nhà phát triển thành một mã, tuy nhiên với hai cách tiếp cận hoàn toàn khác nhau: <code>Git Merge</code> và <code>Git Rebase</code>.</p><p>Trong bài viết này, chúng ta sẽ tiến hành phân tích cơ chế hoạt động, so sánh ưu nhược điểm giữa<code>Merge</code>và <code>Rebase</code>, từ đó có được góc nhìn đúng đắn về lợi ích cũng như nhìn ra những rủi ro trong quá trình áp dụng thực tế vào những tình huống cụ thể khác nhau.</p><h2><strong>1. Git Merge là gì?</strong></h2><p>Bắt đầu với quy trình làm việc phổ biến nhất mà hầu hết chúng ta đã quá quen sử dụng để tích hợp các thay đổi trong quá trình hợp nhất nhánh: <code>Git Merge</code>.</p><p>Đặt bối cảnh muốn hợp nhất nhánh <code>feature</code> vào nhánh <code>main</code>, chúng ta thực hiện hợp nhất nhánh bằng <code>git merge</code> thông qua các dòng lệnh đơn giản sau đây</p><pre><code>git checkout feature
git merge main</code></pre><p>Kết quả sau khi thực thi là <code>git merge</code> tạo ra một commit mới ngay trên nhánh <code>main</code>, commit này gắn kết lịch sử của cả hai nhánh <code>main</code> và <code>feature</code> &nbsp;như một quan hệ của sự hợp nhất.</p><p>Merge là một hình thức hợp nhất dễ dàng, an toàn và tương đối dễ chịu. Các nhánh hiện có hoàn toàn không được thay đổi trạng thái lịch sử các commit dưới bất kỳ hình thức nào. Điều này tránh được tất cả những cạm bẫy tiềm ẩn của việc tái xây dựng (rebase) lịch sử commit.</p><p>Nếu nhánh <code>main</code> hoạt động rất tích cực, điều này có thể làm rối lịch sử commit của nhánh<code>feature</code> khá nhiều. Mặc dù có thể giảm thiểu vấn đề này bằng các tùy chọn git log nâng cao nhưng nó có thể khiến các nhà phát triển khác khó hiểu được lịch sử của dự án.</p><p>Hình bên dưới là kết quả cuối cùng từ hành động hợp nhất. Như bạn có thể thấy, lịch sử phát triển tính năng trên nhánh <code>feature</code> vẫn được giữ nguyên như cũ, chỉ thêm C7.</p><img src="https://statics.cdn.200lab.io/2023/08/Untitled-1.png" alt=""><p>Bằng cách hợp nhất các thay đổi từ “main” thành “feature-2”, lịch sử được giữ nguyên như những gì đã xảy ra và chỉ có commit hợp nhất “C7” được đưa vào.</p><p>Nói một cách dễ hiểu, git <code>Merge</code> sẽ hợp nhất nhiều lịch sử các cây commits tạo thành một commit mới đại diện cho sự hợp nhất và giữ nguyên các trạng thái lịch sử commit cùng tồn tại song song trên các nhánh khác nhau.</p><p>Từ đó gây ra hình dạng “kim cương” trong cây Git và cực kỳ khó khăn khi cây Git trở nên thiếu “tuyến tính” trong việc quan sát theo dõi tiến độ dự án.</p><h2><strong>2. Git Rebase là gì?</strong></h2><p>Với cách tiếp cận thứ hai cho cùng một nhiệm vụ hợp nhất nhánh, tuy nhiên cũng khá xa lạ với đa số các lập trình viên cũng như tiềm ẩn nhiều rủi ro trong quá trình hợp nhất: <code>Git Merge</code>.</p><p>Đặt bối cảnh muốn hợp nhất nhánh <code>feature</code> vào nhánh <code>main</code>, chúng ta thực hiện hợp nhất nhánh bằng git <code>merge</code> thông qua các dòng lệnh đơn giản sau đây.</p><pre><code>git checkout feature
git rebase main</code></pre><p>Kết quả sau khi thực thi là git <code>rebase</code>, sẽ đưa toàn bộ những commit mới tạo ở nhánh<code>feature</code> nối tiếp vào "ngọn" của nhánh <code>main</code>, nhưng thay vì sử dụng một <code>commit merge</code>, lịch sử commit của dự án sẽ được viết lại bằng cách tạo ra những commit mới ứng với mỗi commit ban đầu của nhánh <code>feature</code>.</p><p>Lợi ích chính của việc <code>rebase</code> là bạn sẽ nhận được một lịch sử commit sạch đẹp, rõ ràng và “tuyến tính” theo một đường thẳng từ đầu đến cuối dự án để dễ theo dõi hơn. &nbsp;Khi đó chúng ta sẽ dễ dàng điều hướng, kiểm tra lịch sử project với những câu lệnh như <code>git log</code>, <code>git bisect</code>và <code>gitk</code> .</p><p>Tuy nhiên, có 2 điều cần phải thỏa hiệp đối với lịch sử commit kiểu này: độ an toàn và khả năng truy vết. Nếu chúng ta không tuân theo "nguyên tắc an toàn"khi <code>rebase</code>, việc viết lại lịch sử của dự án có thể là thảm họa khó lường đối với quy trình cộng tác làm việc nhóm.</p><p>Một điều ít quan trọng hơn, <code>rebase</code> sẽ làm mất đi ngữ cảnh mà commit <code>merge</code> cung cấp, từ đó chúng ta sẽ không biết được khi nào những thay đổi ở nhánh tích hợp được đưa vào nhánh chủ đề.</p><p>Bên dưới là kết quả cuối cùng từ hành động rebase. Lưu ý cách các cam kết C5 và C6 đã được áp dụng lại thẳng vào C4, viết lại lịch sử phát triển và xóa hoàn toàn các cam kết cũ!</p><img src="https://statics.cdn.200lab.io/2023/08/Untitled--1--1.png" alt="Untitled"><p>Lưu ý mã băm của các commit C5 và C6 đã thay đổi, đơn giản vì thực tế đó là các cam kết mới đã được tạo (mặc dù nội dung có thể vẫn giống hệt nhau).</p><h2><strong>3. So sánh Git Rebase và Git Merge</strong></h2><p>Quan sát hình ảnh bên dưới cách trực quan, kết quả của cả hai quá trình <code>Merge</code> và <code>Rebase</code>đều giúp hợp nhất và thống nhất code giữa 2 nhánh trong quá trình làm việc.</p><p>Với <code>Merge</code>, tổng số lượng commit tăng 1 đơn vị và hình thành đồ thị Git dạng “kim cương”. Với <code>Rebase</code>, tổng số lượng commit không đổi và hình thành đồ thị Git dạng tuyến tính theo một đường thẳng.</p><img src="https://statics.cdn.200lab.io/2023/08/Untitled--2-.png" alt="Untitled"><p>Lợi ích của rebase là nó có 𝐥𝐢𝐧𝐞𝐚𝐫 𝐜𝐨𝐦𝐦𝐢𝐭 𝐡𝐢𝐬𝐭𝐨𝐫𝐲.</p><h3><strong>3.1 Ưu điểm của Merge</strong></h3><ul><li><p><strong>Không phá hủy:</strong> Hợp nhất là một hoạt động không phá hủy trong Git vì nó không thay đổi các nhánh hiện có. Nó chỉ thêm một cam kết bổ sung gọi là cam kết hợp nhất.</p></li><li><p><strong>Thay đổi tích hợp:</strong> Việc hợp nhất cho phép người dùng tích hợp các thay đổi từ nhánh này sang nhánh khác. Việc tích hợp này rất hữu ích nếu nhiều nhà phát triển đang làm việc trên các tính năng khác nhau cần được hợp nhất vào nhánh chính.</p></li><li><p><strong>Nhiều phiên bản cơ sở mã:</strong> Việc hợp nhất cho phép người dùng giữ nhiều phiên bản cơ sở mã. Điều này hữu ích nếu cần có các phiên bản mã cũ hơn hoặc nếu bạn cần một nhánh riêng để kiểm tra tính năng.</p></li><li><p><strong>Thay đổi theo dõi:</strong> Việc hợp nhất cho phép người dùng theo dõi những thay đổi đã được thực hiện đối với cơ sở mã. Việc theo dõi rất hữu ích cho việc gỡ lỗi hoặc kiểm tra.</p></li><li><p><strong>Giải quyết xung đột:</strong> Hợp nhất là một cơ chế giải quyết xung đột tuyệt vời cho phép người dùng hợp nhất các thay đổi mà nhiều nhà phát triển đã thực hiện trên cùng một tệp.</p></li></ul><h3><strong>3.2 Nhược điểm của Merge</strong></h3><ul><li><p><strong>Hợp nhất xung đột:</strong> Một trong những nhược điểm chính của git <code>merge</code> là khả năng xảy ra xung đột khi hợp nhất khi thực hiện nhiều thay đổi trên cùng một tệp. Đôi khi, việc giải quyết những xung đột như vậy có thể tốn thời gian và khó khăn.</p></li><li><p><strong>Mất bối cảnh:</strong> Khi những thay đổi từ hai nhánh được hợp nhất, một số ngữ cảnh của những thay đổi có thể bị mất. Do đó, lịch sử cơ sở mã và nguồn gốc của một số thay đổi có thể khó theo dõi hơn.</p></li><li><p><strong>Sự phức tạp:</strong> Độ phức tạp của cơ sở mã tăng theo số lượng nhánh và sự hợp nhất, điều này làm tăng độ khó bảo trì và làm phức tạp mối quan hệ giữa các nhánh.</p></li><li><p><strong>Sự phụ thuộc:</strong> Việc hợp nhất nhiều nhánh thành một có thể tạo ra sự phụ thuộc giữa các phần khác nhau của cơ sở mã. Điều này có thể cản trở việc thử nghiệm và triển khai thay đổi hơn nữa vì những thay đổi trong một phần của cơ sở mã có thể ảnh hưởng đến các phần khác.</p></li></ul><h3><strong>3.3 Ưu điểm của Rebase</strong></h3><ul><li><p><strong>Lịch sử dự án tuyến tính:</strong> Lợi ích chính của việc khởi động lại Git là lịch sử dự án sạch sẽ vì lệnh này loại bỏ các cam kết hợp nhất không cần thiết. Kết quả là một lịch sử dự án hoàn toàn tuyến tính, không có bất kỳ nhánh nào.</p></li><li><p><strong>Cơ sở mã đơn giản hóa</strong>: Lịch sử tuyến tính giúp bạn dễ dàng hiểu cơ sở mã và truy tìm nguồn gốc của những thay đổi cụ thể.</p></li><li><p><strong>Giải quyết xung đột hợp nhất:</strong> Lệnh git <code>rebase</code> áp dụng các thay đổi từ nhánh này lên nhánh khác. Điều này có nghĩa là xung đột hợp nhất được đơn giản hóa và các thay đổi được áp dụng theo cách có trật tự hơn so với hợp nhất git.</p></li><li><p><strong>Các nhánh tính năng riêng biệt:</strong> Việc <code>rebase</code> có thể được sử dụng để tách các nhánh tính năng trên nhánh chính. Việc tách chúng ra giúp quản lý nhiều nhánh dễ dàng hơn và cập nhật chúng với những thay đổi mới nhất trong nhánh chính.</p></li><li><p><strong>Uyển chuyển:</strong> git <code>rebase</code> linh hoạt hơn git <code>merge</code> trong việc quản lý các nhánh và thực hiện các thay đổi vì nó cho phép người dùng sắp xếp lại hoặc sửa đổi các cam kết, thay đổi thông báo cam kết, v.v.</p></li></ul><h3><strong>3.4 Nhược điểm của Rebase</strong></h3><ul><li><p><strong>Có thể có xung đột hợp nhất:</strong> Việc khởi động lại một quy trình công việc có thể gây ra xung đột hợp nhất thường xuyên hơn nếu có một nhánh tồn tại lâu dài đã đi xa khỏi nhánh chính. Nếu nhánh chứa nhiều cam kết mới, chúng có thể xung đột với nhánh chính. Để tránh những vấn đề như vậy, hãy thường xuyên khởi động lại các nhánh của bạn so với nhánh chính.</p></li><li><p><strong>Mất cam kết:</strong> Chạy git <code>rebase</code> ở chế độ tương tác với các lệnh phụ loại bỏ các cam kết khỏi nhánh có thể gây ra các cam kết bị mất trong nhật ký tức thời của nhánh. Tuy nhiên, các cam kết thường có thể được khôi phục bằng cách hoàn tác <code>rebase</code> bằng <code>git reflog</code>.</p></li><li><p><strong>Thiếu thông tin cam kết:</strong> Sau khi khởi động lại, bạn không thể biết khi nào các thay đổi ngược dòng được thực hiện và khi nào chúng được tích hợp vào nhánh tính năng.</p></li></ul><h2><strong>4. Quy trình làm việc với Git Rebase</strong></h2><p>Chúng ta đã thấy cách <code>rebase</code> viết lại lịch sử trong khi việc hợp nhất vẫn bảo tồn nó. Nhưng điều này thực sự có ý nghĩa gì theo nghĩa rộng hơn. Và hoạt động này có những khả năng vô hạn và cũng tồn tại nhiều hạn chế tiềm tàng. Vì thế chúng ta cần phải cực kỳ lưu ý và nắm rõ quy trình làm việc cần tuân thủ khi làm việc với <code>Git Rebase</code>.</p><h3><strong>4.1. Local cleanup</strong></h3><p>Trong quá trình phát triển một tính năng trên branch riêng, các lập trình viên có thể có nhiều commit. Để cây Git được clean và gọn hơn, chúng ta cần tiến hành squash commit thông qua tính năng tự <code>rebase</code> trên chính nhánh <code>feature</code> .</p><p>Ví dụ bạn có 3 commits liên tục cần gộp lại 1 commit, thực hiện lệnh sau:</p><pre><code>git switch feature
git rebase -i HEAD~3</code></pre><p>Màn hình hiển thị một tệp editor hiển thị lịch sử commits, chúng ta tiến hành cỉnh sửa file theo syntax. Các options bao gồm:</p><ul><li><p>p: pick - giữ lại commit</p></li><li><p>r: reword - giữ lại commit và sửa message</p></li><li><p>s: squash - bỏ qua commit nhưng tích hợp log vào commit liền trước</p></li><li><p>f: fixup - bỏ qua commit và xoá hoàn toàn log commit</p></li></ul><pre><code class="language-bash">pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like"squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
</code></pre><p>Tiến hành giữ lại commit đầu tiền và squash toàn bộ các commits liền sau bằng cách thay thế pick thành squash. Lưu file <code>:wq</code>và thoát <code>qa!</code>.</p><h3><strong>4.2. Rebasing from main</strong></h3><p>Tiếp theo, sau khi đã gom tất cả các commit của mình làm một chúng ta bắt đầu tiến hành<code>rebase</code> so với branch <code>main</code>. Lưu ý, trước đó ta cần nhảy sang nhánh <code>main</code>và tiến hành pull code từ remote để cập nhật các thay đổi mới nhất trên <code>main</code>.</p><pre><code class="language-bash">git switch main
git pull origin main
git switch feature
git rebase -i main feature</code></pre><h3><strong>4.3. Push force to feature</strong></h3><p>Sau khi đã xử lý các conflicts liên quan và squash các commit mong muốn, lúc này các commits trên <code>main</code>đã được cắt nối tuyến tính vào ngay đầu commit trên <code>feature</code> . Khi đó, chúng ta sẵn sàng push lên remote và sẵn sàng tạo Merge/Pull request</p><pre><code>git push origin feature --force </code></pre><p>Lưu ý:</p><ul><li><p>Sau khi <code>rebase</code>, lịch sử commit local trên nhánh <code>feature</code> đã thay đổi và conflict so với nhánh <code>feature</code> trên remote, vì thế ta cần push force để ghi đè toàn bộ cây Git trên branch featue.</p></li></ul><h3><strong>4.4 Create merge/pull request</strong></h3><p>Lưu ý:</p><ul><li><p>Trong quá trình tạo PR/MR, quá trình approve cần được diễn ra lần lượt có thứ tự và các PR/MR còn lại cần lập tức <code>rebase</code> ngay khi 1 PR/MR đã được merge vào <code>main</code>.</p></li></ul><img src="https://statics.cdn.200lab.io/2023/08/08-10-Integrating-a-feature-into-master-with-and-without-a-rebase.svg" alt=""><h2><strong>5. Tổng kết</strong></h2><p>Cả hai phương pháp đều giúp đạt được mục tiêu hợp nhất các thay đổi từ một nhánh vào nhánh chính trong quy trình làm việc cần thống nhất code giữa các lập trình viên. Thông qua bài viết hi vọng là chúng ta đã có thể hiểu rõ nguyên lý hoạt động khác nhau và cân nhắc sự lựa chọn phù hợp tuỳ theo nhu cầu dự án.</p><p>Nếu chúng ta cần ưu tiên một cây Git sạch sẽ, gọn gàng và “tuyến tính” dễ dàng theo dõi theo tiến độ dự án và không có sự dư thừa những commit merge thì <code>Git rebase</code> là một lựa chọn tối ưu và thông minh.</p><p>Ngược lại, nếu chúng ta cần ưu tiên bảo toàn lịch sử đầy đủ của dự án và tránh những nguy cơ mất mát dữ liệu và không ngại các hình dạng “kim cương” rối mắt trên cây Git khi merge chéo qua lại giữa các branch thì <code>Git merge</code> là một lựa chọn đơn giản và hiệu quả.</p><img src="https://statics.cdn.200lab.io/2023/08/image-39.png" alt=""><h2><strong>6. Tài liệu tham khảo</strong></h2><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://blog.git-init.com/differences-between-git-merge-and-rebase-and-why-you-should-care/"><strong><u>https://blog.git-init.com/differences-between-git-merge-and-rebase-and-why-you-should-care/</u></strong></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing"><strong><u>https://www.atlassian.com/git/tutorials/merging-vs-rebasing</u></strong></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.freecodecamp.org/news/git-rebase-handbook/"><strong><u>https://www.freecodecamp.org/news/git-rebase-handbook/</u></strong></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://phoenixnap.com/kb/git-rebase-vs-merge"><strong><u>https://phoenixnap.com/kb/git-rebase-vs-merge</u></strong></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://twitter.com/alexxubyte/status/1617926489579851777"><strong><u>https://twitter.com/alexxubyte/status/1617926489579851777</u></strong></a></p></li></ul>`}
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
					className='py-1.5 px-4 transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#python
				</Link>
				<Link
					href={''}
					className='py-1.5 px-4 transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
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
						<button className='px-6 py-2 mt-4 mr-4 transition hover:bg-amber-600 bg-emerald-500'>
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
