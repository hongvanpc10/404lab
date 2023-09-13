import { BlogCardHorizontal } from '@/components/blogCard';
import Image from '@/components/image';
import TextEditorViewer from '@/components/textEditor/textEditorViewer';
import Textarea from '@/components/textarea';
import Title from '@/components/title';
import routes from '@/configs/routes';
import moment from 'moment';
import Link from 'next/link';

export default function BlogDetail() {
  return (
    <div>
      <div className="flex mb-10 items-center text-[0.9375rem] text-gray-400">
        <Link href={routes.home} className="flex items-center">
          <i className="ri-home-4-fill"></i>
        </Link>
        <span className="mx-2.5">/</span>
        <Link href={''} className="text-emerald-500">
          Công cụ phát triển website là gì? 18 công cụ phát triển website
        </Link>
      </div>

      <div className="pb-5 border-b border-gray-600">
        <h1 className="text-4xl font-bold">
          Công cụ phát triển website là gì? 18 công cụ phát triển website
        </h1>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
          <div className="flex items-center">
            Đăng bởi
            <Link
              href={routes.blogsByAuthor('edfewf')}
              className="text-emerald-500 ml-1.5"
            >
              Hồng Văn
            </Link>
            <span className="mx-2.5">|</span>
            {moment().format('D [thg] M, YYYY')}
          </div>

          <span className="flex items-center">
            <i className="ri-time-line mr-2 ri-lg"></i>
            10 phút đọc
          </span>
        </div>
      </div>

      <div className="flex items-center mt-6 mb-10">
        <span className="text-gray-400 mr-4">Chia sẻ bài viết:</span>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
            <i className="ri-facebook-fill"></i>
          </button>
          <button className="bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
            <i className="ri-github-fill"></i>
          </button>
          <button className="bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
            <i className="ri-linkedin-fill"></i>
          </button>
          <button className="bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
            <i className="ri-file-copy-line"></i>
          </button>
        </div>
      </div>

      <Image
        alt=""
        src="https://statics.cdn.200lab.io/2022/12/Thumbnails-Blog--2-.png?auto=format,compress&width=1500"
        className="aspect-w-16 aspect-h-9"
      />

      <div className="flex mt-16">
        <div className="mr-6 w-9/12">
          <TextEditorViewer
            content={`<p>Mỗi nghề đều có "công cụ" đặc thù của riêng mình, chẳng hạn như thợ mộc sẽ cần có máy khoan, kính bảo hộ, máy đánh bóng,... họ không thể bắt đầu làm việc nếu thiếu những công cụ đó.</p><p>Và website cũng vậy, sẽ thực sự khó khăn nếu bạn bắt đầu tạo nội dung website mà không có công cụ hỗ trợ. Vì thế, trong bài viết này, <strong>200Lab</strong> sẽ giúp bạn thống kê những <strong>công cụ hữu ích để phát triển website</strong>.</p><h2><strong>Công cụ phát triển website là gì?</strong></h2><img src="https://statics.cdn.200lab.io/2022/12/phat-trien-web-site.jpeg" alt=""><p>Công cụ phát triển website là gì?</p><p>Về mặt kỹ thuật, thuật ngữ "công cụ phát triển web" đề cập đến các sản phẩm được sử dụng để gỡ lỗi và kiểm tra. Tuy nhiên, hầu hết mọi người trong ngành, sử dụng cụm từ này để chỉ tổng số công cụ mà họ sử dụng trong quá trình phát triển web.</p><h2><strong>Tại sao các công cụ phát triển website lại hữu ích?</strong></h2><p>Khi bạn có sự tìm hiểu chuyên sâu về những ví dụ liên quan đến công cụ phát triển website, bạn sẽ nhanh chóng nhận ra vì sao những công cụ này lại cần thiết và hữu ích như thế.</p><p>Các công cụ phát triển web tốt sẽ giúp hợp lý hoá quá trình tạo trang web, giúp các nhà phát triển tạo ra các sản phẩm hấp dẫn, dễ sử dụng và nhanh hơn so với các công cụ khác. &nbsp;</p><h3><strong>Đặc điểm nhận biết một công cụ phát triển web tốt</strong></h3><p>Mặc dù có nhiều công cụ phát triển web khác nhau nhưng chúng cũng sẽ có một số điểm tương đồng giúp bạn biết được đó là công cụ tốt. Dưới đây là một số đặc điểm:</p><h4><strong>Không phức tạp hóa mọi thứ</strong></h4><p>Các công cụ phát triển web tốt sẽ tương đối trực quan và dễ học, chúng không bị phức tạp hoá mọi thứ lên.</p><h4><strong>Làm việc tốt với nhau</strong></h4><p>Những công cụ phát triển web sẽ cung cấp nhiều tính năng mà bất kỳ một nhà phát triển nào cũng thích vì chúng là các công cụ thích hợp cao giúp họ tích hợp trơn tru và quản lý công việc tốt hơn.</p><h4><strong>Giữ dữ liệu của bạn an toàn</strong></h4><p>Bạn nên nhớ rằng, bảo mật luôn phải đặt lên hàng đầu, bạn không nên làm việc với công cụ phát triển website có khả năng bị lỗi hoặc gây hại đến dữ liệu của công ty. Bạn nên tìm hiểu kỹ về các công cụ phát triển trước khi bắt tay vào sử dụng.</p><h2><strong>Các công cụ phát triển website tốt nhất</strong></h2><p>Dưới đây là <strong>18 công cụ phát triển website</strong> mà các nhà phát triển sử dụng hàng ngày để tạo ra website và ứng dụng.</p><h3><strong>1. Sublime Text</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-Sublime-Text.jpeg" alt=""><p>Công cụ phát triển web front-end là code editor cho macOS, chúng sẽ có giao diện trực quan, hiệu quả và nhanh chóng. Nếu bạn đang tìm kiếm các công cụ phát triển website dành cho người mới thì <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sublimetext.com/">Sublime Text</a>sẽ là lựa chọn thích hợp.</p><p><strong>Sublime Text</strong> được coi là một trong những trình soạn thảo mã nguồn tốt nhất vì nó cung cấp nhiều phím tắt khác nhau. Chúng cho phép bạn điều hướng nhanh và có thể thực hiện các chỉnh sửa đồng thời.</p><h3><strong>2. Atom</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-atom.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://atom.io/">Atom</a> miễn phí và là một phần mềm mã nguồn mở dùng để soạn thảo văn bản. Mức độ tuỳ biến cao là một trong những lý do giúp Atom trở thành công cụ được yêu thích. Atom cũng tương thích với Linux, Mac và Windows.</p><p>Nếu bạn đang làm việc theo nhóm, bạn sẽ thấy sức mạnh mà Atom mang lại vì chúng sẽ tạo điều kiện cho sự hợp tác giữa các thành viên trong nhóm. Ngoài ra, bạn có thể thêm các tính năng quan trọng như HTML, JavaScript và cài đặt các packages nguồn mở (open-source packages) để nâng cao chức năng,...</p><h3><strong>3. GitHub</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-GitHub.jpeg" alt=""><p>Nếu bạn mắc lỗi khi đang làm việc với một tính năng mới của dự án thì bạn đừng lo vì <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/">GitHub</a> sẽ giúp bạn. Khi bạn phát triển dự án của mình bằng công cụ này, bạn có thể xem lại sự thay đổi bất kỳ mà bạn đã thực hiện. Bạn thậm chí còn có thể tham khảo trạng thái trước đó.</p><p>GitHub giúp đơn giản hoá quy trình cộng tác. Nếu bạn đang xây dựng phần mềm mã nguồn mở (open-source software) thì GitHub là nền tảng phù hợp để phát triển.</p><h3><strong>4. Sass</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-Sass-1.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://sass-lang.com/">Sass</a> (Syntactally Awesome Style Sheets) là một chương trình tiền xử lý CSS giúp nâng cao chức năng của CSS thông thường, cho phép nó hoạt động giống một ngôn ngữ lập trình hơn. Một số tính năng của Sass bao gồm inheritance, mix-ins và biến (variables).</p><p>Sass giúp bạn tạo được quy trình làm việc hiệu quả và năng suất, chúng sẽ cho ra kết quả nhanh hơn CSS truyền thống.</p><h3><strong>5. TypeScript</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-TypeScript.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.typescriptlang.org/">TypeScript</a> là ngôn ngữ mã nguồn mở nổi tiếng được xây dựng bổ sung trên các tính năng của <strong>JavaScrip</strong>t truyền thống giúp nó trở nên dễ đọc và dễ hiểu hơn. Nếu bạn lo lắng việc mình bỏ sót lỗi (bugs) thì bạn đừng lo vì TypeScript sẽ hỗ trợ bạn làm điều đó giúp bạn tiết kiệm được phần lớn thời gian.</p><h3><strong>6. Chrome's DevTools</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-chrome-devtools-.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developer.chrome.com/docs/devtools/">Chrome Developer Tools</a> hay còn gọi là Chrome DevTools là công cụ dành cho các lập trình viên website. Chúng được tích hợp sẵn bên trong trình duyệt Chrome khi bạn cài đặt.</p><p>Công cụ này sẽ giúp bạn tối ưu hóa thời gian tải và cho phép bạn chỉnh sửa HTML hoặc CSS theo thời gian thực trong khi xem phân tích hiệu suất trang web của mình. Công cụ này cũng được cập nhật thường xuyên.</p><h3><strong>7. CodePen</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-codepen.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://codepen.io/">CodePen </a>nên được đưa vào danh sách các công cụ phát triển web tốt nhất dành cho người mới bắt đầu vì tính trực quan và thân thiện với người dùng. Bạn có thể dùng công cụ này để gỡ lỗi (bugs) giúp trang web của bạn hoạt động hiệu quả hơn.</p><p><strong>CodePen</strong> là code editor trực tuyến hỗ trợ HTML, CSS và JavaScript. Chúng hoạt động trên các dự án front-end, vì vậy nếu bạn đang làm việc liên quan đến khách hàng, bạn có thể lựa chọn CodePen làm công cụ hỗ trợ phát triển website của mình.</p><h3><strong>8. jQuery</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-jQuery.jpeg" alt=""><p>Khi sử dụng<a target="_blank" rel="noopener noreferrer nofollow" href="https://jquery.com/"> jQuery</a>, bạn sẽ bị thu hút bởi thư viện JavaScript vì hệ sinh thái khổng lồ của chúng với các frameworks, công cụ, package và các ngôn ngữ mới để biên dịch ra JavaScript,... Công cụ này có nhiệm vụ đơn giản hoá quá trình phát triển front-end bằng cách truy cập vào <a target="_blank" rel="noopener" href="https://blog.hubspot.com/website/dom-web-design?_ga=2.66157165.255360254.1654266109-39464906.1654266109">DOM tree</a>.</p><h3><strong>9. Bootstrap</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-bootstrap.jpeg" alt=""><p>Nếu bạn quan tâm đến các framework front-end, bạn có thể đã biết đến <a target="_blank" rel="noopener noreferrer nofollow" href="https://getbootstrap.com/">Bootstrap</a>. <strong>CSS framework</strong> này được tạo bởi các nhà phát triển đã tạo ra Twitter.</p><p>Bootstrap đơn giản hóa quá trình thiết kế các trang web và ưu tiên thiết bị di động vào code của bạn. Bạn cũng sẽ thích thú khi nó đi kèm với một thư viện với biểu tượng SVG để nâng cao các trang Bootstrap mà bạn tạo ra.</p><h3><strong>10. Foundation</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-foundation.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://get.foundation/">Foundation </a>cung cấp một loạt front-end frameworks mà bạn có thể sử dụng để bắt đầu xây dựng thiết kế email và trang web, bạn có thể tùy chỉnh một cách nhanh chóng và hiệu quả.</p><p>Foundation không chỉ cung cấp các chủ đề HTML được tối ưu hóa mà bạn có thể sử dụng các block để xây dựng, tạo ra điều độc đáo cho công ty của bạn theo cách dễ tiếp cận.</p><h3><strong>11. Django</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-Django.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.djangoproject.com/">Django</a> là một trong các công cụ phát triển web tốt nhất với khả năng mở rộng. Python framework với nguồn mở được các ứng dụng phổ biến sử dụng như Uber và Instagram, chúng nhanh chóng xây dựng các ứng dụng web có thể mở rộng.</p><p>Dù bạn là người mới bắt đầu tìm hiểu về công cụ phát triển web hay bạn đã có nhiều năm kinh nghiệm làm việc với Python thì bạn đều thấy Django thân thiện với người dùng và trực quan khi sử dụng.</p><h3><strong>12. Angular</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-angular.jpeg" alt=""><p>Khi sử dụng <a target="_blank" rel="noopener noreferrer nofollow" href="https://angular.io/">Angular </a>bạn sẽ nhanh chóng nhận ra tính linh hoạt của nó. Angular cho phép bạn bổ sung nhiều chức năng và có sự cải tiến độc đáo. Bạn có thể đã nghe thảo luận về giao diện Command-line. Điều này cho phép bạn có cơ hội phát triển, khởi tạo và dàn dựng các ứng dụng Angular trực tiếp từ command line để sử dụng.</p><h3><strong>13. Postman</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-postman.jpeg" alt=""><p>Tầm quan trọng của <strong>API trong website</strong> là điều quan trọng mà bạn không thể bỏ qua, vì thế bạn cần có một công cụ có thể giúp khai thác tốt sức mạnh tiềm năng của chúng và <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.postman.com/">Postman</a> sẽ hỗ trợ bạn làm điều đó. Đã có hơn <strong>20 triệu nhà phát triển</strong> sử dụng Postman cho nhu cầu API có họ</p><p>Nền tảng thử nghiệm và xây dựng API sẽ giúp bạn đơn giản hoá việc tạo web và cho phép bạn cộng tác nâng cao hơn.</p><h3><strong>14. Figma</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-figma.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.figma.com/">Figma</a> tự gọi mình là công cụ thiết kế tối ưu, bạn sẽ làm việc teamwork một dễ dàng nhờ vào sự trợ giúp của công cụ giao diện người dùng (user-interface) này.</p><p>Bạn đang tìm cách vẽ một ứng dụng, trang web hay logo,... Figma sẽ trang bị cho bạn các công cụ hỗ trợ giúp bạn thực hiện những việc đó. Figma miễn phí, bạn có thể tận dụng tối đa tài nguyên của chúng để hỗ trợ cho công việc của mình.</p><h3><strong>15. Visual Studio Code</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-visual-studio-code.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://code.visualstudio.com/">Visual Studio Code</a> là một công cụ được rất nhiều các nhà phát triển web yêu thích. Mặc dù về mặt kỹ thuật Visual Studio Code là một trình soạn thảo mã nguồn nhưng chúng có thể nâng lên cấp độ mới bằng cách sử dụng extension library. Visual Studio Code hỗ trợ TypeScript, JavaScript và Node.js.</p><h3><strong>16. XAMPP</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-XAMPP.jpeg" alt=""><p>Các nhà phát triển PHP thường rất thích công cụ <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.apachefriends.org/index.html">XAMPP</a>, đặc biệt lúc họ đang tạo ra các sản phẩm WordPress.</p><p>Nó bao gồm MariaDB, PHP và Perl. Bạn có thể cài đặt công cụ đa nền tảng này trên macOS, Windows và Linux. Chúng có sẵn nhiều ứng dụng và bạn có thể chọn một loạt các tiện ích bổ sung để ứng dụng một cách linh hoạt.</p><h3><strong>17. Notepad++</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-notepad.jpeg" alt=""><p>Khi mới nhìn vào, bạn sẽ cảm thấy <a target="_blank" rel="noopener noreferrer nofollow" href="https://notepad-plus-plus.org/downloads/">Notepad++</a> không phải là code editor độc đáo hay mới nhất. Tuy nhiên, đừng vì thiết kế đơn giản khiến bạn bỏ qua công cụ đầy hữu ích này.</p><p>Notepad++ được xem là một trong những công cụ phát triển web tốt nhất dành cho người mới bắt đầu vì nó hỗ trợ các tập lệnh đơn giản và bạn có thể chỉnh sửa văn bản, nhưng chúng chỉ khả dụng trên Windows. Notepad++ hỗ trợ gần 80 ngôn ngữ lập trình, code folding và nổi bật cú pháp (syntax highlighting)</p><h3><strong>18. Tailwind CSS</strong></h3><img src="https://statics.cdn.200lab.io/2022/12/web-development-tools-tailwind-css.jpeg" alt=""><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tailwindcss.com/">Tailwind CSS </a>sẽ cung cấp cho bạn một lộ trình thiết kế front end cho website. Nó sẽ là công cụ hoàn hảo đáp ứng được những yêu cầu mà những dự án của bạn đưa ra. Bạn có thể phát triển đồng thời cả phong cách và cấu trúc với công cụ này.</p><h2><strong>Lời kết</strong></h2><p>Nếu bạn hỏi 100 nhà phát triển: "Các công cụ phát triển web mà họ thấy thích nhất là gì?" Bạn có thể sẽ nhận được 100 câu trả lời khác nhau. Vì tất nhiên, mỗi nhà phát triển đều sẽ có công cụ phát triển web yêu thích của riêng mình. Bạn hãy tự chọn cho mình một công cụ mà bạn thấy phù hợp với bản thân và với nhu cầu của doanh nghiệp nhé.</p>`}
          />
        </div>

        <div>
          <div className="space-y-16 sticky top-6">
            <div>
              <Title className="!text-xl !mb-4">Mục lục</Title>

              <ul className="space-y-2">
                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>
                    1. Avro là gì? Vì sao cần dùng Avro với Kafka
                  </Link>
                </li>
                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>
                    2. Schema Registry: Hiểu rõ hơn về cơ sở dữ liệu Schema
                  </Link>
                </li>
                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>
                    3. Thay đổi dữ liệu dễ dàng với Avro Schema Evolution
                  </Link>
                </li>
                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>
                    4. Schema Compatibility: Đảm bảo dữ liệu luôn đồng nhất
                  </Link>
                </li>

                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>5. Thực hành Kafka cùng 200Lab nhé!</Link>
                </li>
                <li className="text-gray-300 text-[0.9375rem] transition hover:text-emerald-500">
                  <Link href={''}>6. Tổng kết</Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 bg-gray-900">
              <Link href={routes.blogsByAuthor('sdcfdsefe')}>
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80"
                  className="aspect-w-14 aspect-h-16"
                />
              </Link>

              <div className="col-span-2 p-3">
                <h2 className="text-lg font-bold">
                  <Link href={routes.blogsByAuthor('sdcfdsefe')}>Hong Van</Link>
                </h2>
                <p className="mt-1 text-[0.9375rem] text-gray-300">
                  make impossible to possible
                </p>
                <div className="text-gray-400 text-sm mt-2">
                  <span>Follow me:</span>
                  <div className="flex items-center text-base space-x-2 ml-3">
                    <Link
                      href={''}
                      className="transition hover:text-emerald-500"
                    >
                      <i className="ri-facebook-circle-fill"></i>
                    </Link>
                    <Link
                      href={''}
                      className="transition hover:text-emerald-500"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                    <Link
                      href={''}
                      className="transition hover:text-emerald-500"
                    >
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link
                      href={''}
                      className="transition hover:text-emerald-500"
                    >
                      <i className="ri-earth-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-gray-700 mt-14 mb-8" />

      <div className="flex items-center flex-wrap">
        <Link
          href={''}
          className="py-1.5 px-4 transition rounded-sm hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2"
        >
          #python
        </Link>
        <Link
          href={''}
          className="py-1.5 px-4 transition rounded-sm hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2"
        >
          #tài liệu
        </Link>
      </div>

      <div className="max-w-3xl mt-16 mx-auto space-y-16">
        <div>
          <Title>Bình luận</Title>

          <form className="flex flex-col items-end">
            <Textarea placeholder="Viết bình luận của bạn tại đây" rows={4} />
            <button className="px-6 rounded-sm py-2 mt-4 mr-4 transition hover:bg-emerald-600 bg-emerald-500">
              Bình luận
            </button>
          </form>
        </div>

        <div>
          <Title>Bài viết liên quan</Title>

          <div className="space-y-8">
            <BlogCardHorizontal />
            <BlogCardHorizontal />
            <BlogCardHorizontal />
            <BlogCardHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
}
