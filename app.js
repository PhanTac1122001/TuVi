
function filterStarTable() {
    let input = document.getElementById("starSearchInput");
    let filter = input.value.toLowerCase();
    let table = document.getElementById("starLookupTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let textContent = tr[i].textContent.toLowerCase();
        if (textContent.indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}



        mermaid.initialize({ startOnLoad: true, theme: 'dark', securityLevel: 'loose' });

        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            let targetBtn = document.querySelector(".tab-btn[onclick*='" + tabId + "']");
            if (targetBtn) targetBtn.classList.add('active');
            
            let targetPane = document.getElementById(tabId);
            if (targetPane) targetPane.classList.add('active');

            if (tabId === 'tab-full-text') {
                setTimeout(() => {
                    if (window.mermaid) {
                        try {
                            mermaid.run({ querySelector: '.mermaid' });
                        } catch(e) {
                            console.log('Mermaid init notice:', e);
                        }
                    }
                }, 80);
            }
        }

        document.querySelectorAll('.toc-nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                let href = this.getAttribute('href');
                let targetId = href.startsWith('#') ? href.substring(1) : href;
                
                switchTab('tab-full-text');
                
                let targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        const observerOptions = { root: null, rootMargin: '-80px 0px -60% 0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let id = entry.target.getAttribute('id');
                    document.querySelectorAll('.toc-nav a').forEach(a => {
                        a.classList.remove('active');
                        if (a.getAttribute('href') === '#' + id) {
                            a.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.doc-parsed-body h2[id]').forEach(h2 => { observer.observe(h2); });

        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";

            let btnTop = document.getElementById("btn-top");
            if (winScroll > 300) { btnTop.classList.add("show"); } else { btnTop.classList.remove("show"); }
        };

        function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

        function toggleTheme() {
            let html = document.documentElement;
            let icon = document.querySelector("#themeToggle i");
            if (html.getAttribute("data-theme") === "dark") {
                html.setAttribute("data-theme", "light");
                icon.className = "fa-solid fa-sun";
            } else {
                html.setAttribute("data-theme", "dark");
                icon.className = "fa-solid fa-moon";
            }
        }

        function searchContent() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let elements = document.querySelectorAll('.doc-parsed-body p, .doc-parsed-body h2, .doc-parsed-body h3, .doc-parsed-body li');

            elements.forEach(el => {
                let text = el.textContent.toLowerCase();
                if (text.includes(input)) {
                    el.style.display = "";
                    el.style.backgroundColor = input.length > 1 ? "rgba(212, 175, 55, 0.2)" : "";
                } else {
                    if (input.length > 2) { el.style.display = "none"; } else { el.style.display = ""; el.style.backgroundColor = ""; }
                }
            });
        }

        function filterCatalog(category, btnEl) {
            if (btnEl) {
                document.querySelectorAll('.catalog-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
                btnEl.classList.add('active');
            }
            let cards = document.querySelectorAll('.star-card');
            let comboSec = document.getElementById('comboSetsSection');
            
            if (category === 'combo') {
                cards.forEach(c => c.style.display = 'none');
                if (comboSec) comboSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            cards.forEach(card => {
                let elem = card.getAttribute('data-element');
                let vong = card.getAttribute('data-vong');
                if (category === 'all' || elem === category || vong === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        const STAR_DATABASE = {
            'Tử Vi': {
                element: 'Thổ (Dương)',
                elementClass: 'tho',
                vong: 'Bắc Đẩu Tinh',
                type: 'Đế Tinh - Vua Các Sao',
                hoaKhi: 'Tôn Quý & Uy Quyền',
                tuongMao: 'Thân hình đầy đặn ("hậu trọng chi dung"), mặt bầu dục hoặc tròn, dáng người uy nghiêm, mắt sáng hiền từ có thần, tác phong khoan hòa tự trọng.',
                tinhCach: 'Trọng danh dự, thích gầy dựng sự nghiệp lớn, mang phong thái lãnh đạo bẩm sinh. Tính tình bao dung nhưng đôi khi cô độc hay nghi ngại.',
                mieuVuong: 'Miếu địa tại Tỵ, Ngọ, Mùi. Vượng địa tại Dần, Thân. Đắc địa tại Thìn, Tuất. Bình hòa tại Sửu, Mão, Dậu, Hợi.',
                cungLuan: {
                    'Mệnh': 'Quyền quý, bản lĩnh gánh vác, tuổi trẻ sớm bộc lộ năng lực quản lý, một đời có vị thế xã hội.',
                    'Tài Bạch': 'Kiếm tiền từ con đường chính ngạch, quản lý dòng tiền lớn, tích lũy bất động sản & kho tàng vững chắc.',
                    'Quan Lộc': 'Thích hợp làm lãnh đạo, quản lý doanh nghiệp, quan chức chính quyền hoặc người đứng đầu tổ chức.',
                    'Phu Thê': 'Người phối ngẫu có gia thế, tính tình đứng đắn, có vị thế tài chính và danh vọng giúp đỡ cho mệnh chủ.',
                    'Điền Trạch': 'Sở hữu nhà cửa rộng rãi, đất đai thừa kế hoặc tự mua sắm tài sản lớn.',
                    'Thiên Di': 'Ra ngoài được quý nhân trọng dụng, dễ thăng tiến ly hương, giao thiệp tầng lớp thượng lưu.'
                },
                boSao: 'Rất hợp hội tụ cùng Thiên Phủ, Thiên Tướng, Vũ Khúc, Tả Phù, Hữu Bật, Hóa Lộc, Hóa Quyền. Kỵ gặp Địa Không, Địa Kiếp (cô quân).'
            },
            'Thiên Phủ': {
                element: 'Thổ (Dương)',
                elementClass: 'tho',
                vong: 'Nam Đẩu Tinh',
                type: 'Lệnh Tinh - Kho Trời',
                hoaKhi: 'Tài Bạch & Thuần Hòa',
                tuongMao: 'Mặt vuông chữ điền hoặc tròn, môi hồng răng trắng, dáng vẻ béo chắc đoan chính, da dẻ hồng hào, ánh mắt ôn hòa.',
                tinhCach: 'Thận trọng, chu đáo, giỏi tích lũy và quản lý tài chính. Tính tình thuần hậu, không thích mạo hiểm nhưng rất kiên trì.',
                mieuVuong: 'Miếu địa tại Dần, Thân, Tỵ, Hợi. Vượng địa tại Tý, Ngọ, Mùi. Đắc địa tại Thìn, Tuất.',
                cungLuan: {
                    'Mệnh': 'Tài lộc dư dả, tâm tính vững vàng, cuộc sống an nhàn có chiều sâu tích lũy.',
                    'Tài Bạch': 'Đế vương kho tiền, giàu có lâu bền, có năng lực quản trị ngân sách tối ưu.',
                    'Quan Lộc': 'Hợp làm tài chính, ngân hàng, quản trị kho vận, bất động sản hoặc tư vấn kinh tế.',
                    'Phu Thê': 'Vợ/chồng đảm đang, biết vun vén gia đình, tay hòm chìa khóa giỏi.',
                    'Điền Trạch': 'Gia trạch hưng vượng, bất động sản gia tăng liên tục theo thời gian.',
                    'Thiên Di': 'Ra ngoài bình an, gặp môi trường kinh doanh thuận lợi, dễ gặp đối tác tín nhiệm.'
                },
                boSao: 'Rất hợp với Tử Vi, Vũ Khúc, Thiên Tướng, Lộc Tồn, Hóa Lộc. Kỵ Tuần Triệt triệt hạ kho tiền.'
            },
            'Thiên Cơ': {
                element: 'Mộc (Dương)',
                elementClass: 'moc',
                vong: 'Bắc Đẩu Tinh',
                type: 'Thiện Tinh - Trí Tuệ',
                hoaKhi: 'Mưu Trí & Hoạt Bát',
                tuongMao: 'Vóc dáng trung bình, da mỏng, mặt xương dài, nước da xanh vàng, tác phong nhanh nhẹn, mắt linh hoạt.',
                tinhCach: 'Thông minh, nhạy bén, thích nghiên cứu học thuật, linh hoạt ứng biến. Đôi khi tư duy quá nhiều dẫn đến lo âu.',
                mieuVuong: 'Miếu địa tại Tỵ, Ngọ, Mùi. Vượng địa tại Thân, Dậu. Đắc địa tại Dần, Mão, Thìn, Tuất.',
                cungLuan: {
                    'Mệnh': 'Tư duy chiến lược, mưu trí kiệt xuất, thích hợp công việc trí óc, tư vấn.',
                    'Tài Bạch': 'Kiếm tiền bằng trí tuệ, kỹ năng lập kế hoạch, đầu tư thông minh.',
                    'Quan Lộc': 'Phù hợp công nghệ, IT, tư vấn quản trị, nghiên cứu khoa học, chiến lược gia.',
                    'Phu Thê': 'Bạn đời thông minh, linh hoạt, hay di chuyển hoặc làm việc trí óc.',
                    'Điền Trạch': 'Hay thay đổi chỗ ở, cải tạo trang trí nhà cửa theo phong cách hiện đại.',
                    'Thiên Di': 'Ngoại giao giỏi, thích nghi môi trường mới rất nhanh, hay đi công tác.'
                },
                boSao: 'Hợp với Thái Âm, Thiên Đồng, Thiên Lương (bộ Cơ Nguyệt Đồng Lương), Văn Xương, Văn Khúc, Hóa Khoa.'
            },
            'Thái Dương': {
                element: 'Hỏa (Dương)',
                elementClass: 'hoa',
                vong: 'Nam Đẩu Tinh',
                type: 'Nhật Tinh - Mặt Trời',
                hoaKhi: 'Quang Minh & Danh Tiếng',
                tuongMao: 'Da trắng trắc, mặt tròn đầy đặn như mặt trời, trán cao, mắt sáng rực rỡ, diện mạo đường bệ uy nghi.',
                tinhCach: 'Hào sảng, quang minh chính đại, nhiệt thành giúp đỡ mọi người. Thích danh tiếng, gánh vác trách nhiệm lớn.',
                mieuVuong: 'Miếu địa tại Tỵ, Ngọ (Sáng nhất). Vượng địa tại Dần, Mão, Thìn. Hãm địa tại Thân, Dậu, Tuất, Hợi, Tý.',
                cungLuan: {
                    'Mệnh': 'Danh tiếng vang xa, chí khí lớn, có duyên với nam giới trong gia đình và xã hội.',
                    'Tài Bạch': 'Kiếm tiền từ uy tín, danh tiếng, phát triển quy mô kinh doanh mở rộng.',
                    'Quan Lộc': 'Thăng tiến rực rỡ trong chính trị, luật pháp, truyền thông, quản lý công chúng.',
                    'Phu Thê': 'Vợ/chồng có chí lớn, sự nghiệp thành đạt, được mọi người nể trọng.',
                    'Điền Trạch': 'Nhà ở hướng sáng, nhiều ánh nắng, địa thế cao rảnh thoáng mát.',
                    'Thiên Di': 'Xuất ngoại rạng danh, ra ngoài được tôn vinh và kính trọng.'
                },
                boSao: 'Hợp với Thái Âm (bộ Nhật Nguyệt), Cự Môn (bộ Cự Nhật), Hóa Khoa, Hóa Quyền, Đào Hồng.'
            },
            'Vũ Khúc': {
                element: 'Kim (Dương)',
                elementClass: 'kim',
                vong: 'Bắc Đẩu Tinh',
                type: 'Tài Tinh - Tiền Tài',
                hoaKhi: 'Tài Lộc & Quả Quyết',
                tuongMao: 'Thân hình gầy guộc chắc chắn, tác phong nhanh nhẹn, mặt dài, ánh mắt nhìn thẳng cương nghị quả quyết.',
                tinhCach: 'Thực tế, quyết đoán, nguyên tắc, nhạy bén với cơ hội tài chính. Ít nói nhưng hành động dứt khoát.',
                mieuVuong: 'Miếu địa tại Thìn, Tuất, Sửu, Mùi. Vượng địa tại Dần, Thân. Đắc địa tại Mão, Dậu.',
                cungLuan: {
                    'Mệnh': 'Nhà kinh doanh tài ba, quyết đoán, có duyên với tiền bạc và quản lý ngân sách.',
                    'Tài Bạch': 'Tiền tài dồi dào, kiếm tiền dứt khoát, giỏi đầu tư tài chính và thương mại.',
                    'Quan Lộc': 'Phù hợp ngân hàng, tài chính, chứng khoán, kim khí, quân sự hoặc sản xuất.',
                    'Phu Thê': 'Bạn đời quyết đoán, độc lập tài chính, đôi khi hơi lạnh lùng thực tế.',
                    'Điền Trạch': 'Tích lũy được nhiều bất động sản và kim loại quý có giá trị cao.',
                    'Thiên Di': 'Ra ngoài tìm thấy cơ hội kiếm tiền lớn, quyết đoán chớp thời cơ.'
                },
                boSao: 'Hợp với Thiên Phủ, Thất Sát, Tả Hữu, Lộc Tồn, Hóa Lộc, Hóa Quyền.'
            },
            'Thiên Đồng': {
                element: 'Thủy (Dương)',
                elementClass: 'thuy',
                vong: 'Bắc Đẩu Tinh',
                type: 'Phúc Tinh - An Nhàn',
                hoaKhi: 'Phúc Thọ & Cải Biến',
                tuongMao: 'Khuôn mặt tròn hơi béo, mày thanh mi tú, mắt nhân từ, thân hình đầy đặn, nét mặt trẻ lâu.',
                tinhCach: 'Ôn hòa, lương thiện, thích cuộc sống an nhàn lãng mạn. Giàu lòng vị tha nhưng thiếu tính kiên trì.',
                mieuVuong: 'Miếu địa tại Mão, Tỵ, Hợi. Vượng địa tại Dần, Thân. Đắc địa tại Tý. Hãm địa tại Thìn, Tuất, Ngọ.',
                cungLuan: {
                    'Mệnh': 'Trẻ lâu, may mắn, tay trắng gầy dựng nên cơ đồ sau nhiều trải nghiệm.',
                    'Tài Bạch': 'Nguồn tiền đến từ sự may mắn, dịch vụ, du lịch, thưởng thức nghệ thuật.',
                    'Quan Lộc': 'Hợp làm dịch vụ, văn hóa, ẩm thực, giải trí, nhân sự, từ thiện.',
                    'Phu Thê': 'Vợ/chồng hiền lành, tình cảm lãng mạn, biết chăm sóc gia đình.',
                    'Điền Trạch': 'Nhà ở thoáng mát, gần sông nước, không gian thư thái.',
                    'Thiên Di': 'Ra ngoài gặp nhiều may mắn, có duyên ăn uống thưởng ngoạn.'
                },
                boSao: 'Hợp với Thiên Lương, Thái Âm, Thiên Cơ, Hóa Khoa, Văn Xương, Văn Khúc.'
            },
            'Liêm Trinh': {
                element: 'Hỏa (Âm)',
                elementClass: 'hoa',
                vong: 'Bắc Đẩu Tinh',
                type: 'Tù Tinh - Đào Hoa Thứ',
                hoaKhi: 'Quyền Uy & Liêm Chính',
                tuongMao: 'Thân hình to khỏe, xương vai lộ, trán rộng, da vàng/đen, chân mày lộ xương, tiếng nói vang lớn.',
                tinhCach: 'Mạnh mẽ, nóng nảy, tự do, liêm chính, có tính kỷ luật cao. Giàu cảm xúc và tính sáng tạo.',
                mieuVuong: 'Miếu địa tại Thìn, Tuất. Vượng địa tại Tý, Ngọ, Dần, Thân. Đắc địa tại Sửu, Mùi. Hãm tại Tỵ, Hợi.',
                cungLuan: {
                    'Mệnh': 'Bản lĩnh, trung thành, nghiêm túc trong công việc, có sức thu hút nghệ thuật.',
                    'Tài Bạch': 'Kiếm tiền từ sự nghiệp bứt phá, ngành công nghiệp, thiết kế, kỹ thuật.',
                    'Quan Lộc': 'Hợp ngành công an, quân đội, pháp luật, kỹ thuật cao, nghệ thuật sáng tạo.',
                    'Phu Thê': 'Vợ/chồng cá tính, đôi khi ghen tuông nhưng rất chung thủy.',
                    'Điền Trạch': 'Gia trạch quy củ, nhà cửa bài trí hiện đại đầy đủ tiện nghi.',
                    'Thiên Di': 'Ngoại giao xông xáo, bứt phá mở rộng mối quan hệ xã hội.'
                },
                boSao: 'Hợp với Tử Vi, Thiên Phủ, Thiên Tướng, Văn Xương, Văn Khúc, Hóa Quyền.'
            },
            'Tham Lang': {
                element: 'Thủy (Âm)',
                elementClass: 'thuy',
                vong: 'Bắc Đẩu Tinh',
                type: 'Đào Hoa Tinh - Khai Phá',
                hoaKhi: 'Ham Muốn & Nghệ Thuật',
                tuongMao: 'Dáng người cao lớn, mắt ướt đa tình, lông mày rậm, phong thái quyến rũ nghệ thuật & ngoại giao.',
                tinhCach: 'Đa tài, linh hoạt, giao thiệp rộng, thích trải nghiệm cái mới, tham vọng lớn trong kinh doanh.',
                mieuVuong: 'Miếu địa tại Sửu, Mùi (Tham Vũ đồng hành). Vượng địa tại Thìn, Tuất. Đắc địa tại Tỵ, Hợi.',
                cungLuan: {
                    'Mệnh': 'Đa năng, có khiếu kinh doanh & nghệ thuật, nhiều mối quan hệ thu hút.',
                    'Tài Bạch': 'Hoạch tài giàu nhanh, kiếm tiền từ đa nguồn: ngoại giao, giải trí, đầu tư.',
                    'Quan Lộc': 'Hợp kinh doanh, thương mại, nhà hàng, khách sạn, thời trang, ngoại giao.',
                    'Phu Thê': 'Bạn đời quyến rũ, nhiều tài lẻ, đời sống tình cảm phong phú.',
                    'Điền Trạch': 'Nhà đẹp, hay trang hoàng nội thất sang trọng.',
                    'Thiên Di': 'Ngoại giao nổi bật, có sức hút lớn ở môi trường xã hội.'
                },
                boSao: 'Hợp với Vũ Khúc, Hỏa Tinh, Linh Tinh (cách Hỏa Tham, Linh Tham giàu nhanh), Hóa Lộc.'
            },
            'Cự Môn': {
                element: 'Thổ (Âm) / Thủy',
                elementClass: 'tho',
                vong: 'Bắc Đẩu Tinh',
                type: 'Ám Tinh - Khẩu Lộc',
                hoaKhi: 'Biện Lun & Ngôn Từ',
                tuongMao: 'Mặt dài hoặc tròn, miệng rộng, mắt đảo nhanh, vóc dáng gầy/vừa, nổi bật với đôi môi linh hoạt.',
                tinhCach: 'Sắc sảo, hoài nghi, giỏi nghiên cứu, năng lực ngôn ngữ & tranh luận vượt trội.',
                mieuVuong: 'Miếu địa tại Mão, Dậu (Cự Nhật). Vượng địa tại Tỵ, Hợi. Đắc địa tại Dần, Thân.',
                cungLuan: {
                    'Mệnh': 'Khẩu tài xuất chúng, hợp ngành cần khả năng thuyết phục và tư duy phản biện.',
                    'Tài Bạch': 'Kiếm tiền bằng lời nói, tư vấn, giảng dạy, tranh tụng, marketing.',
                    'Quan Lộc': 'Hợp luật sư, giáo viên, diễn giả, nhà báo, ngoại giao, chính trị gia.',
                    'Phu Thê': 'Vợ/chồng thông minh, hay tranh luận, cần nhường nhịn nhau.',
                    'Điền Trạch': 'Chú ý giấy tờ nhà đất rõ ràng để tránh tranh chấp.',
                    'Thiên Di': 'Ra ngoài nổi tiếng nhờ tài ăn nói nhưng hay vướng đàm tiếu.'
                },
                boSao: 'Hợp với Thái Dương, Hóa Khoa, Hóa Quyền, Văn Xương, Văn Khúc, Lộc Tồn.'
            },
            'Thiên Tướng': {
                element: 'Thổ (Âm) / Thủy',
                elementClass: 'tho',
                vong: 'Nam Đẩu Tinh',
                type: 'Ấn Tinh - Bảo Vệ',
                hoaKhi: 'Quyền Uy & Trợ Giúp',
                tuongMao: 'Da trắng vàng, mũi thẳng, gò má cao, nét mặt phúc hậu, ánh mắt thu hút uy nghi bảo vệ người khác.',
                tinhCach: 'Chính trực, đại lượng, thích giúp đỡ kẻ yếu, coi trọng tín nghĩa và trật tự.',
                mieuVuong: 'Miếu địa tại Dần, Thân. Vượng địa tại Thìn, Tuất. Đắc địa tại Tý, Ngọ, Sửu, Mùi.',
                cungLuan: {
                    'Mệnh': 'Trực giác tốt, được mọi người nể trọng, tác phong làm việc chuẩn mực.',
                    'Tài Bạch': 'Tài chính ổn định, quản lý tiền bạc bài bản, minh bạch.',
                    'Quan Lộc': 'Trợ thủ đắc lực, nhà quản lý, tư pháp, y tế, hành chính cao cấp.',
                    'Phu Thê': 'Vợ/chồng đứng đắn, có trách nhiệm, hỗ trợ đắc lực cho sự nghiệp.',
                    'Điền Trạch': 'Gia phong nghiêm cẩn, nhà cửa ngăn nắp đàng hoàng.',
                    'Thiên Di': 'Ra ngoài uy phong, được quý nhân tin tưởng giao trọng trách.'
                },
                boSao: 'Hợp với Tử Vi, Thiên Phủ, Vũ Khúc, Tả Phù, Hữu Bật, Hóa Quyền, Hóa Khoa.'
            },
            'Thiên Lương': {
                element: 'Mộc (Dương)',
                elementClass: 'moc',
                vong: 'Nam Đẩu Tinh',
                type: 'Ấm Tinh - Trường Thọ',
                hoaKhi: 'Giải Ách & Đạo Mạo',
                tuongMao: 'Trán cao, mặt dài, dáng người tháo vát, phong thái đạo mạo, ánh mắt nghiêm nghị như bậc thầy.',
                tinhCach: 'Lương thiện, từ bi, thích chỉ dạy gánh vác, có tinh thần nguyên tắc và thọ khí cao.',
                mieuVuong: 'Miếu địa tại Ngọ, Dần, Thân. Vượng địa tại Tỵ, Hợi. Đắc địa tại Tý, Mão, Dậu.',
                cungLuan: {
                    'Mệnh': 'Gặp may mắn hóa giải tai ốm, phong thái người thầy, tuổi thọ cao.',
                    'Tài Bạch': 'Kiếm tiền chính đáng, hợp nguồn tiền từ y tế, giáo dục, bảo hiểm, từ thiện.',
                    'Quan Lộc': 'Hợp làm thầy giáo, bác sĩ, nhà nghiên cứu, cố vấn, công chức xã hội.',
                    'Phu Thê': 'Vợ/chồng lớn tuổi hơn hoặc phong thái nghiêm túc, chu đáo.',
                    'Điền Trạch': 'Nhà ở lâu đời, không gian yên tĩnh hợp dưỡng lão.',
                    'Thiên Di': 'Ra ngoài được người kính trọng, hay làm việc nghĩa giúp đời.'
                },
                boSao: 'Hợp với Thái Dương, Thiên Cơ, Thiên Đồng, Hóa Khoa, Văn Xương, Văn Khúc.'
            },
            'Thất Sát': {
                element: 'Kim (Dương)',
                elementClass: 'kim',
                vong: 'Nam Đẩu Tinh',
                type: 'Tướng Tinh - Dũng Cảm',
                hoaKhi: 'Quyết Đoán & Sát Phạt',
                tuongMao: 'Da đỏ vàng/trắng, mặt dài gầy, ánh mắt đe dọa sắc bén uy nghiêm, dáng người cao gầy quả quyết.',
                tinhCach: 'Cương nghị, dũng cảm, độc lập, không sợ gian khó, hành động nhanh lẹ.',
                mieuVuong: 'Miếu địa tại Dần, Thân, Tỵ, Hợi. Vượng địa tại Tý, Ngọ. Đắc địa tại Thìn, Tuất.',
                cungLuan: {
                    'Mệnh': 'Anh hùng cá tính, thích nghi thử thách lớn, tiên phong mở đường.',
                    'Tài Bạch': 'Dám đầu tư mạo hiểm, kiếm tiền mạnh mẽ từ quy mô lớn.',
                    'Quan Lộc': 'Hợp quân sự, công an, thể thao, kỹ thuật cơ khí, lãnh đạo dự án bão táp.',
                    'Phu Thê': 'Vợ/chồng mạnh mẽ, cá tính, cần sự tôn trọng độc lập lẫn nhau.',
                    'Điền Trạch': 'Thích tự tay gây dựng nhà cửa đất đai từ hai bàn tay trắng.',
                    'Thiên Di': 'Ra ngoài xông pha, xua tan trở ngại, có bản lĩnh uy phong.'
                },
                boSao: 'Hợp với Tử Vi, Vũ Khúc, Phá Quân, Tham Lang, Tả Hữu, Hóa Quyền.'
            },
            'Phá Quân': {
                element: 'Thủy (Dương)',
                elementClass: 'thuy',
                vong: 'Bắc Đẩu Tinh',
                type: 'Hao Tinh - Tiên Phong',
                hoaKhi: 'Đổi Mới & Sáng Tạo',
                tuongMao: 'Lưng dày, lông mày rậm, dáng người trung bình, cử chỉ mạnh mẽ táo bạo không thích gò bó.',
                tinhCach: 'Táo bạo, sáng tạo, dám đạp đổ cái cũ để xây dựng cái mới. Không ngại thay đổi.',
                mieuVuong: 'Miếu địa tại Tý, Ngọ. Vượng địa tại Tỵ, Hợi. Đắc địa tại Thìn, Tuất.',
                cungLuan: {
                    'Mệnh': 'Tiên phong phá cừu đổi mới, năng lực sáng tạo đột phá.',
                    'Tài Bạch': 'Dòng tiền biến động, dứt khoát tái đầu tư kinh doanh lớn.',
                    'Quan Lộc': 'Hợp mảng khởi nghiệp, công nghệ mới, xây dựng, kiến trúc, cải tổ doanh nghiệp.',
                    'Phu Thê': 'Tình cảm có tính bước ngoặt, bạn đời cá tính đột phá.',
                    'Điền Trạch': 'Thích cải tạo, đập đi xây lại không gian sống độc đáo.',
                    'Thiên Di': 'Ngoại giao xông xáo, hay di chuyển sang môi trường hoàn toàn mới.'
                },
                boSao: 'Hợp với Thất Sát, Tham Lang, Lộc Tồn, Hóa Lộc, Hóa Quyền.'
            },
            'Thái Âm': {
                element: 'Thủy (Âm)',
                elementClass: 'thuy',
                vong: 'Nam Đẩu Tinh',
                type: 'Nguyệt Tinh - Mặt Trăng',
                hoaKhi: 'Phú Quý & Nhu Hòa',
                tuongMao: 'Da trắng xanh, mặt tròn thanh tú, cử chỉ nhẹ nhàng lãng mạn, ánh mắt dịu dàng thu hút khác giới.',
                tinhCach: 'Nhu hòa, tinh tế, giàu trí tưởng tượng, trọng tình cảm và thích không gian yên bình.',
                mieuVuong: 'Miếu địa tại Dậu, Tuất, Hợi (Đêm đẹp nhất). Vượng địa tại Thân, Tý. Hãm địa tại Mão, Thìn, Tỵ.',
                cungLuan: {
                    'Mệnh': 'Phú quý an nhàn, có duyên với nữ giới, khiếu thẩm mỹ nghệ thuật cao.',
                    'Tài Bạch': 'Tài sản tích lũy bền vững, có duyên với bất động sản & đất đai.',
                    'Quan Lộc': 'Hợp tài chính, kế toán, bất động sản, văn hóa, nghệ thuật, thiết kế.',
                    'Phu Thê': 'Vợ/chồng dịu dàng, chu đáo, có nhan sắc và hỗ trợ kinh tế.',
                    'Điền Trạch': 'Điền sản phong phú, nhà ở đẹp gần sông hồ hoặc cảnh quan thơ mộng.',
                    'Thiên Di': 'Ra ngoài được nhiều người yêu mến giúp đỡ, duyên ngoại giao nhẹ nhàng.'
                },
                boSao: 'Hợp với Thái Dương, Thiên Cơ, Thiên Đồng, Hóa Khoa, Hóa Lộc, Văn Xương, Văn Khúc.'
            }
        };

        const COMBO_DATABASE = {
            'Tử Phủ Vũ Tướng': {
                title: 'Bộ Tử Phủ Vũ Tướng (Đế Vương & Quyền Lực)',
                stars: ['Tử Vi (Thổ)', 'Thiên Phủ (Thổ)', 'Vũ Khúc (Kim)', 'Thiên Tướng (Thổ)'],
                desc: 'Tổ hợp các chính tinh đế vương và kho tài chính. Chủ về vị thế lãnh đạo tối cao, quản lý ngân sách bài bản, công danh bền vững và năng lực gánh vác đại nghiệp.',
                application: 'Người có bộ Tử Phủ Vũ Tướng miếu vượng tại Tam phương Mệnh-Tài-Quan là người có tố chất làm chủ, quản lý tập đoàn, quan chức cao cấp hoặc chuyên gia tài chính hàng đầu.'
            },
            'Sát Phá Tham': {
                title: 'Bộ Sát Phá Tham (Biến Động & Bứt Phá)',
                stars: ['Thất Sát (Kim)', 'Phá Quân (Thủy)', 'Tham Lang (Thủy)'],
                desc: 'Tổ hợp các tinh tú tiên phong, xông xáo và giàu tính đột phá. Thích hợp môi trường cạnh tranh bão táp, thị trường mới hoặc công việc đòi hỏi sự đổi mới liên tục.',
                application: 'Khi hội tụ cát tinh (Hóa Lộc, Hỏa Tinh, Linh Tinh), người có bộ Sát Phá Tham giàu nhanh đột biến, xoay chuyển tình thế ngoạn mục.'
            },
            'Cơ Nguyệt Đồng Lương': {
                title: 'Bộ Cơ Nguyệt Đồng Lương (Văn Nhân & Mưu Trí)',
                stars: ['Thiên Cơ (Mộc)', 'Thái Âm (Thủy)', 'Thiên Đồng (Thủy)', 'Thiên Lương (Mộc)'],
                desc: 'Tổ hợp các sao mưu trí, tư duy chiến lược và tinh thần nhân hậu. Chủ về học vấn, công chức, hoạch định chính sách và sự phát triển ổn định dài lâu.',
                application: 'Rất hợp cho ngành tư vấn, IT, giáo dục, y tế, nhân sự và quản trị văn phòng.'
            },
            'Cự Nhật': {
                title: 'Bộ Cự Môn - Thái Dương (Quang Minh & Thuyết Phục)',
                stars: ['Cự Môn (Thổ/Thủy)', 'Thái Dương (Hỏa)'],
                desc: 'Mặt trời Thái Dương xua tan bóng tối hoài nghi của Cự Môn, tạo nên năng lực hùng biện sắc bén, tư duy lập luận và quang minh chính đại.',
                application: 'Rất hợp cho luật sư, diễn giả, ngoại giao, nhà báo, truyền thông và marketing.'
            },
            'Nhật Nguyệt': {
                title: 'Bộ Nhật Nguyệt Tịnh Minh (Âm Dương Hòa Hợp)',
                stars: ['Thái Dương (Hỏa)', 'Thái Âm (Thủy)'],
                desc: 'Sự kết hợp hoàn hảo giữa Âm và Dương, Mặt trời và Mặt trăng. Chủ về trí tuệ kiệt xuất, danh tài vẹn toàn và góc nhìn toàn diện.',
                application: 'Giúp mệnh chủ thông minh, ứng xử khéo léo, được quý nhân nam nữ giúp đỡ đa phương.'
            },
            'Vũ Sát': {
                title: 'Bộ Vũ Khúc - Thất Sát (Song Kim Sát Phạt)',
                stars: ['Vũ Khúc (Kim)', 'Thất Sát (Kim)'],
                desc: 'Hai ngôi sao thuộc hành Kim hội tụ tại Thìn/Tuất/Mão/Dậu. Mang tính quyết đoán, dứt khoát, uy lực tài chính và tinh thần thép.',
                application: 'Phù hợp cho lãnh đạo doanh nghiệp sản xuất, tài chính mạo hiểm, quân sự và công nghệ kỹ thuật nặng.'
            },
            'Phá Liêm Tham': {
                title: 'Bộ Phá Quân - Liêm Trinh - Tham Lang (Thượng Võ & Sáng Tạo)',
                stars: ['Phá Quân (Thủy)', 'Liêm Trinh (Hỏa)', 'Tham Lang (Thủy)'],
                desc: 'Tổ hợp giàu nhiệt huyết, sáng tạo nghệ thuật và bản lĩnh vượt qua thử thách khó khăn.',
                application: 'Giúp con người bứt phá giới hạn, có khiếu nghệ thuật, thiết kế và mở đường cho xu hướng mới.'
            }
        };

        const CUNG_DATABASE = {
            'Tý': { name: 'Cung TÝ', element: 'Thủy (Âm)', canChi: 'Nhâm Tý', desc: 'Vị trí chính Bắc, thuộc Thủy vượng. Nơi khởi đầu dòng khí sinh sôi, chủ về trí tuệ và sự chuẩn bị.' },
            'Sửu': { name: 'Cung SỬU', element: 'Thổ (Âm)', canChi: 'Quý Sửu', desc: 'Phương Bắc Đông, Thổ ẩm tích trữ. Nơi kết tụ kho tàng và chuẩn bị bước sang mùa Xuân.' },
            'Dần': { name: 'Cung DẦN', element: 'Mộc (Dương)', canChi: 'Giáp Dần', desc: 'Phương Đông Nam, Mộc sinh phát. Vị trí Lâm Quan/Trường Sinh của Hỏa Cục, chủ về sự vươn lên.' },
            'Mão': { name: 'Cung MÃO', element: 'Mộc (Âm)', canChi: 'Ất Mão', desc: 'Chính Đông, Mộc vượng rực rỡ. Nơi mặt trời mọc, chủ về sức sống, học thuật và nghệ thuật.' },
            'Thìn': { name: 'Cung THÌN', element: 'Thổ (Dương)', canChi: 'Bính Thìn', desc: 'Vị trí THIÊN LA, Thủy Mộ. Nơi thử thách bản lĩnh để bứt phá vươn xa.' },
            'Tỵ': { name: 'Cung TỴ', element: 'Hỏa (Âm)', canChi: 'Đinh Tỵ', desc: 'Phương Đông Nam, Hỏa sinh sôi. Vị trí Trường Sinh của Kim Cục, chủ về sự biến hóa.' },
            'Ngọ': { name: 'Cung NGỌ', element: 'Hỏa (Dương)', canChi: 'Mậu Ngọ', desc: 'Chính Nam, Hỏa vượng cực đỉnh. Đỉnh cao danh vọng, ngai vàng Tử Vi cư Ngọ.' },
            'Mùi': { name: 'Cung MÙI', element: 'Thổ (Âm)', canChi: 'Kỷ Mùi', desc: 'Phương Nam Tây, Thổ khô nuôi dưỡng. Nơi tích tụ thành quả lao động.' },
            'Thân': { name: 'Cung THÂN', element: 'Kim (Dương)', canChi: 'Canh Thân', desc: 'Phương Tây Nam, Kim chớm vượng. Trường Sinh Thủy Cục, chủ về hành động.' },
            'Dậu': { name: 'Cung DẬU', element: 'Kim (Âm)', canChi: 'Tân Dậu', desc: 'Chính Tây, Kim vượng thu hoạch. Nơi thu hoạch quả ngọt và sự dứt khoát.' },
            'Tuất': { name: 'Cung TUẤT', element: 'Thổ (Dương)', canChi: 'Nhâm Tuất', desc: 'Vị trí ĐỊA VÕNG, Hỏa Mộ. Nơi rèn luyện ý chí vượt qua mạng lưới thử thách.' },
            'Hợi': { name: 'Cung HỢI', element: 'Thủy (Âm)', canChi: 'Quý Hợi', desc: 'Phương Tây Bắc, Thủy khởi nguồn. Nơi hội tụ cảm xúc và trí tuệ thâm sâu.' }
        };

        function openStarModal(starName) {
            let data = STAR_DATABASE[starName];
            if (!data) return;

            let badgeClass = 'badge-' + data.elementClass;
            let html = `
                <div class="modal-header">
                    <div class="modal-title">
                        <i class="fa-solid fa-star" style="color: var(--accent-gold);"></i>
                        ${starName}
                    </div>
                    <div class="modal-meta-badges">
                        <span class="star-tag ${badgeClass}">Ngũ Hành: ${data.element}</span>
                        <span class="star-tag c-tho">${data.vong}</span>
                        <span class="star-tag c-moc">${data.type}</span>
                        <span class="star-tag c-hoa">Hóa Khí: ${data.hoaKhi}</span>
                    </div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-user-ninja"></i> 1. Tướng Mạo & Thần Thái</div>
                    <div class="modal-section-body">${data.tuongMao}</div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-brain"></i> 2. Tính Cách & Khí Chất</div>
                    <div class="modal-section-body">${data.tinhCach}</div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-compass"></i> 3. Trạng Thái Miếu - Vượng - Đắc - Hãm</div>
                    <div class="modal-section-body">${data.mieuVuong}</div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-table-cells"></i> 4. Ý Nghĩa Chi Tiết Khi Thủ Tại Các Cung</div>
                    <div class="modal-section-body">
                        <ul style="list-style: none; padding: 0;">
                            ${Object.keys(data.cungLuan).map(cung => '<li style="margin-bottom: 6px;"><strong>Cung ' + cung + '</strong>: ' + data.cungLuan[cung] + '</li>').join('')}
                        </ul>
                    </div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-cubes"></i> 5. Tổ Hợp Bộ Sao Đi Kèm</div>
                    <div class="modal-section-body">${data.boSao}</div>
                </div>
            `;

            openModalHtml(html);
        }

        function openComboModal(comboName) {
            let data = COMBO_DATABASE[comboName];
            if (!data) return;

            let html = `
                <div class="modal-header">
                    <div class="modal-title">
                        <i class="fa-solid fa-cubes" style="color: var(--accent-gold);"></i>
                        ${data.title}
                    </div>
                    <div class="modal-meta-badges">
                        ${data.stars.map(s => '<span class="star-tag c-tho">' + s + '</span>').join('')}
                    </div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-shield-halved"></i> 1. Tổng Quan Bản Chất Bộ Sao</div>
                    <div class="modal-section-body">${data.desc}</div>
                </div>

                <div class="modal-section">
                    <div class="modal-section-title"><i class="fa-solid fa-chart-line"></i> 2. Ứng Dụng Thực Hành Khi Luận Giải</div>
                    <div class="modal-section-body">${data.application}</div>
                </div>
            `;

            openModalHtml(html);
        }

function showStaticCungModal(chiName) {
    const data = CUNG_DATABASE[chiName];
    if (!data) return;

    const html = `
        <div class="modal-header">
            <div class="modal-title">
                <i class="fa-solid fa-border-all" style="color: var(--accent-gold);"></i>
                ${data.name} (${data.canChi})
            </div>
            <div class="modal-meta-badges">
                <span class="star-tag c-tho">Thuộc Địa Chi: ${chiName}</span>
                <span class="star-tag c-thuy">Ngũ Hành: ${data.element}</span>
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title"><i class="fa-solid fa-circle-info"></i> Đặc Tính Cung Địa Chi</div>
            <div class="modal-section-body">${data.desc}</div>
        </div>
    `;

    openModalHtml(html);
}

        function openModalHtml(htmlContent) {
            let overlay = document.getElementById('globalModalOverlay');
            let container = document.getElementById('modalContentContainer');
            container.innerHTML = htmlContent;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            let overlay = document.getElementById('globalModalOverlay');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        function closeModalOnOverlay(e) { if (e.target.id === 'globalModalOverlay') closeModal(); }
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

        function initFormOptions() {
            let cYear = document.getElementById('cYear');
            let cViewYear = document.getElementById('cViewYear');
            let cMonth = document.getElementById('cMonth');
            let cDay = document.getElementById('cDay');
            let cHour = document.getElementById('cHour');
            let cMinute = document.getElementById('cMinute');

            if (!cYear) return;

            for (let y = 1920; y <= 2030; y++) {
                let opt = new Option(y, y);
                if (y === 1999) opt.selected = true;
                cYear.add(opt);
            }

            for (let y = 1950; y <= 2050; y++) {
                let opt = new Option(y, y);
                if (y === 2026) opt.selected = true;
                cViewYear.add(opt);
            }

            for (let m = 1; m <= 12; m++) {
                let opt = new Option(m < 10 ? '0' + m : m, m);
                if (m === 9) opt.selected = true;
                cMonth.add(opt);
            }

            for (let d = 1; d <= 31; d++) {
                let opt = new Option(d < 10 ? '0' + d : d, d);
                if (d === 11) opt.selected = true;
                cDay.add(opt);
            }

            for (let h = 0; h <= 23; h++) {
                let opt = new Option(h < 10 ? '0' + h : h, h);
                if (h === 6) opt.selected = true;
                cHour.add(opt);
            }

            for (let min = 0; min <= 59; min += 5) {
                let opt = new Option(min < 10 ? '0' + min : min, min);
                if (min === 45) opt.selected = true;
                cMinute.add(opt);
            }
        }
        initFormOptions();

        document.addEventListener('DOMContentLoaded', function() {
            // Auto generate initial chart on load matching TuViVietNam screenshot
            setTimeout(() => {
                let form = document.getElementById('classicTuViForm');
                if (form) {
                    let ev = new Event('submit', { cancelable: true });
                    form.dispatchEvent(ev);
                }
            }, 100);
        });


        // Exact Solar / Lunar Conversion Engine
        function getJulianDay(d, m, y) {
            let a = Math.floor((14 - m) / 12);
            let y1 = y + 4800 - a;
            let m1 = m + 12 * a - 3;
            return d + Math.floor((153 * m1 + 2) / 5) + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) - 32045;
        }

        function getNewMoonDay(k, timeZone) {
            let T = k / 1236.85;
            let T2 = T * T;
            let T3 = T2 * T;
            let dr = Math.PI / 180;
            let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
            Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.00917 * T2) * dr);
            let M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
            let Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
            let F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
            let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * M * dr);
            C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(2 * Mpr * dr);
            C1 = C1 - 0.0004 * Math.sin(3 * Mpr * dr);
            C1 = C1 + 0.0104 * Math.sin(2 * F * dr) - 0.0051 * Math.sin((M + Mpr) * dr);
            C1 = C1 - 0.0004 * Math.sin((M - Mpr) * dr) + 0.0004 * Math.sin((2 * F + M) * dr);
            C1 = C1 - 0.0004 * Math.sin((2 * F - M) * dr) - 0.0006 * Math.sin((2 * F + Mpr) * dr);
            C1 = C1 + 0.0010 * Math.sin((2 * F - Mpr) * dr) + 0.0005 * Math.sin((M + 2 * Mpr) * dr);
            let deltat = (T < -1) ? 10 : (T < 0 ? 15 : 65);
            let JdNew = Jd1 + C1 - deltat / 86400;
            return Math.floor(JdNew + 0.5 + timeZone / 24);
        }

        function convertSolarToLunar(dd, mm, yy) {
            let timeZone = 7;
            let dayNumber = getJulianDay(dd, mm, yy);
            let k = Math.floor((dayNumber - 2415021.07699) / 29.53058868);
            let lastMonthStart = getNewMoonDay(k, timeZone);
            if (lastMonthStart > dayNumber) {
                k = k - 1;
                lastMonthStart = getNewMoonDay(k, timeZone);
            }
            let lunarDay = dayNumber - lastMonthStart + 1;

            let k11 = Math.floor((getJulianDay(31, 12, yy - 1) - 2415021.07699) / 29.53058868);
            let lastA11 = getNewMoonDay(k11, timeZone);
            if (lastA11 > lastMonthStart) {
                k11 = Math.floor((getJulianDay(31, 12, yy - 2) - 2415021.07699) / 29.53058868);
                lastA11 = getNewMoonDay(k11, timeZone);
            }
            let off = Math.round((lastMonthStart - lastA11) / 29.53058868);
            let lunarMonth = off + 11;
            if (lunarMonth > 12) lunarMonth -= 12;

            let lunarYear = yy;
            if (lunarMonth === 11 || lunarMonth === 12) {
                if (mm === 1) lunarYear = yy - 1;
            } else if (lunarMonth === 1) {
                if (mm === 12) lunarYear = yy + 1;
            }

            return { day: lunarDay, month: lunarMonth, year: lunarYear, julianDay: dayNumber };
        }

        function convertLunarToSolar(lDay, lMonth, lYear) {
            let timeZone = 7;
            let k = Math.floor((lYear - 1900) * 12.3685) + lMonth - 1;
            let newMoon = getNewMoonDay(k, timeZone);
            let julianDay = newMoon + lDay - 1;

            let a = julianDay + 32044;
            let b = Math.floor((4 * a + 3) / 146097);
            let c = a - Math.floor((146097 * b) / 4);
            let d = Math.floor((4 * c + 3) / 1461);
            let e = c - Math.floor((1461 * d) / 4);
            let m = Math.floor((5 * e + 2) / 153);

            let day = e - Math.floor((153 * m + 2) / 5) + 1;
            let month = m + 3 - 12 * Math.floor(m / 10);
            let year = 100 * b + d - 4800 + Math.floor(m / 10);

            return { day: day, month: month, year: year, julianDay: julianDay };
        }

        const CAN_NAMES = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
        const CHI_NAMES = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
        
        const CUNG_NAMES_ORDER = ['MỆNH', 'PHỤ MẪU', 'PHÚC ĐỨC', 'ĐIỀN TRẠCH', 'QUAN LỘC', 'NÔ BỘC', 'THIÊN DI', 'TẶT ÁCH', 'TÀI BẠCH', 'TỬ TỨC', 'PHU THÊ', 'HUYNH ĐỆ'];
        const CUC_NAMES = { 2: 'Thủy nhị cục', 3: 'Mộc tam cục', 4: 'Kim tứ cục', 5: 'Thổ ngũ cục', 6: 'Hỏa lục cục' };

        const NAP_AM_NAMES = {
            'Giáp Tý': 'Hải Trung Kim', 'Ất Sửu': 'Hải Trung Kim', 'Bính Dần': 'Lư Trung Hỏa', 'Đinh Mão': 'Lư Trung Hỏa',
            'Mậu Thìn': 'Đại Lâm Mộc', 'Kỷ Tỵ': 'Đại Lâm Mộc', 'Canh Ngọ': 'Lộ Trung Thổ', 'Tân Mùi': 'Lộ Trung Thổ',
            'Nhâm Thân': 'Kiếm Phong Kim', 'Quý Dậu': 'Kiếm Phong Kim', 'Giáp Tuất': 'Sơn Đầu Hỏa', 'Ất Hợi': 'Sơn Đầu Hỏa',
            'Bính Tý': 'Giản Hạ Thủy', 'Đinh Sửu': 'Giản Hạ Thủy', 'Mậu Dần': 'Thành Đầu Thổ', 'Kỷ Mão': 'Thành Đầu Thổ',
            'Canh Thìn': 'Bạch Lập Kim', 'Tân Tỵ': 'Bạch Lập Kim', 'Nhâm Ngọ': 'Dương Liễu Mộc', 'Quý Mùi': 'Dương Liễu Mộc',
            'Giáp Thân': 'Tuyền Trung Thủy', 'Ất Dậu': 'Tuyền Trung Thủy', 'Bính Tuất': 'Ốc Thượng Thổ', 'Đinh Hợi': 'Ốc Thượng Thổ',
            'Mậu Tý': 'Tích Lịch Hỏa', 'Kỷ Sửu': 'Tích Lịch Hỏa', 'Canh Dần': 'Tùng Bách Mộc', 'Tân Mão': 'Tùng Bách Mộc',
            'Nhâm Thìn': 'Trường Lưu Thủy', 'Quý Tỵ': 'Trường Lưu Thủy', 'Giáp Ngọ': 'Sa Trung Kim', 'Ất Mùi': 'Sa Trung Kim',
            'Bính Thân': 'Sơn Hạ Hỏa', 'Đinh Dậu': 'Sơn Hạ Hỏa', 'Mậu Tuất': 'Bình Địa Mộc', 'Kỷ Hợi': 'Bình Địa Mộc',
            'Canh Tý': 'Bích Thượng Thổ', 'Tân Sửu': 'Bích Thượng Thổ', 'Nhâm Dần': 'Kim Bạch Kim', 'Quý Mão': 'Kim Bạch Kim',
            'Giáp Thìn': 'Phú Đăng Hỏa', 'Ất Tỵ': 'Phú Đăng Hỏa', 'Bính Ngọ': 'Thiên Hà Thủy', 'Đinh Mùi': 'Thiên Hà Thủy',
            'Mậu Thân': 'Đại Dịch Thổ', 'Kỷ Dậu': 'Đại Dịch Thổ', 'Canh Tuất': 'Thoa Xoa Kim', 'Tân Hợi': 'Thoa Xoa Kim',
            'Nhâm Tý': 'Tang Đố Mộc', 'Quý Sửu': 'Tang Đố Mộc', 'Giáp Dần': 'Đại Khê Thủy', 'Ất Mão': 'Đại Khê Thủy',
            'Bính Thìn': 'Sa Trung Thổ', 'Đinh Tỵ': 'Sa Trung Thổ', 'Mậu Ngọ': 'Thiên Thượng Hỏa', 'Kỷ Mùi': 'Thiên Thượng Hỏa',
            'Canh Thân': 'Thạch Lựu Mộc', 'Tân Dậu': 'Thạch Lựu Mộc', 'Nhâm Tuất': 'Đại Hải Thủy', 'Quý Hợi': 'Đại Hải Thủy'
        };

        const CHU_MENH_MAP = { 'Tý': 'Tham Lang', 'Sửu': 'Cự Môn', 'Dần': 'Lộc Tồn', 'Mão': 'Văn Khúc', 'Thìn': 'Liêm Trinh', 'Tỵ': 'Vũ Khúc', 'Ngọ': 'Phá Quân', 'Mùi': 'Vũ Khúc', 'Thân': 'Liêm Trinh', 'Dậu': 'Văn Khúc', 'Tuất': 'Liêm Trinh', 'Hợi': 'Cự Môn' };
        const CHU_THAN_MAP = { 'Tý': 'Linh Tinh', 'Sửu': 'Thiên Đồng', 'Dần': 'Thiên Cơ', 'Mão': 'Thiên Lương', 'Thìn': 'Thiên Đồng', 'Tỵ': 'Văn Xương', 'Ngọ': 'Hỏa Tinh', 'Mùi': 'Thiên Đồng', 'Thân': 'Thiên Cơ', 'Dậu': 'Thiên Lương', 'Tuất': 'Thiên Đồng', 'Hợi': 'Văn Xương' };

        
        
        
        
        // =========================================================================
        // STANDARD TỬ VI VIỆT NAM (tuvietnam.vn) AN SAO ENGINE
        // =========================================================================

        const CAN_SHORT_NAMES = ['G.', 'Á.', 'B.', 'Đ.', 'M.', 'K.', 'C.', 'T.', 'N.', 'Q.'];

        const STAR_BRIGHTNESS = {
            'Tử Vi': ['B', 'Đ', 'M', 'B', 'V', 'M', 'M', 'Đ', 'M', 'B', 'V', 'B'],
            'Thiên Cơ': ['B', 'M', 'V', 'M', 'V', 'H', 'B', 'M', 'V', 'M', 'M', 'H'],
            'Thái Dương': ['H', 'Đ', 'V', 'M', 'V', 'M', 'M', 'Đ', 'H', 'H', 'H', 'H'],
            'Vũ Khúc': ['V', 'M', 'Đ', 'H', 'M', 'B', 'V', 'M', 'Đ', 'H', 'M', 'B'],
            'Thiên Đồng': ['V', 'H', 'M', 'H', 'B', 'H', 'H', 'H', 'V', 'H', 'Đ', 'M'],
            'Liêm Trinh': ['V', 'M', 'V', 'H', 'V', 'H', 'V', 'M', 'V', 'H', 'V', 'H'],
            'Thiên Phủ': ['M', 'M', 'M', 'B', 'M', 'Đ', 'M', 'M', 'M', 'B', 'M', 'Đ'],
            'Thái Âm': ['M', 'M', 'H', 'H', 'H', 'H', 'H', 'Đ', 'Đ', 'V', 'V', 'M'],
            'Tham Lang': ['H', 'M', 'B', 'H', 'M', 'H', 'H', 'M', 'B', 'H', 'M', 'H'],
            'Cự Môn': ['V', 'H', 'V', 'M', 'H', 'H', 'V', 'H', 'Đ', 'M', 'H', 'V'],
            'Thiên Tướng': ['V', 'Đ', 'V', 'H', 'M', 'Đ', 'V', 'Đ', 'V', 'H', 'M', 'Đ'],
            'Thiên Lương': ['M', 'V', 'M', 'M', 'V', 'H', 'M', 'V', 'H', 'H', 'M', 'H'],
            'Thất Sát': ['V', 'M', 'M', 'H', 'H', 'Đ', 'V', 'M', 'M', 'H', 'H', 'V'],
            'Phá Quân': ['M', 'V', 'H', 'H', 'V', 'H', 'M', 'V', 'H', 'H', 'V', 'H']
        };

        const TU_HOA_MAP = {
            0: { 'Liêm Trinh': 'Hóa Lộc', 'Phá Quân': 'Hóa Quyền', 'Vũ Khúc': 'Hóa Khoa', 'Thái Dương': 'Hóa Kỵ' },
            1: { 'Thiên Cơ': 'Hóa Lộc', 'Thiên Lương': 'Hóa Quyền', 'Tử Vi': 'Hóa Khoa', 'Thái Âm': 'Hóa Kỵ' },
            2: { 'Thiên Đồng': 'Hóa Lộc', 'Thiên Cơ': 'Hóa Quyền', 'Văn Xương': 'Hóa Khoa', 'Liêm Trinh': 'Hóa Kỵ' },
            3: { 'Thái Âm': 'Hóa Lộc', 'Thiên Đồng': 'Hóa Quyền', 'Thiên Cơ': 'Hóa Khoa', 'Cự Môn': 'Hóa Kỵ' },
            4: { 'Tham Lang': 'Hóa Lộc', 'Thái Âm': 'Hóa Quyền', 'Hữu Bật': 'Hóa Khoa', 'Thiên Cơ': 'Hóa Kỵ' },
            5: { 'Vũ Khúc': 'Hóa Lộc', 'Tham Lang': 'Hóa Quyền', 'Thiên Lương': 'Hóa Khoa', 'Văn Khúc': 'Hóa Kỵ' },
            6: { 'Thái Dương': 'Hóa Lộc', 'Vũ Khúc': 'Hóa Quyền', 'Thiên Đồng': 'Hóa Khoa', 'Thái Âm': 'Hóa Kỵ' },
            7: { 'Cự Môn': 'Hóa Lộc', 'Thái Dương': 'Hóa Quyền', 'Văn Khúc': 'Hóa Khoa', 'Văn Xương': 'Hóa Kỵ' },
            8: { 'Thiên Lương': 'Hóa Lộc', 'Tử Vi': 'Hóa Quyền', 'Tả Phù': 'Hóa Khoa', 'Vũ Khúc': 'Hóa Kỵ' },
            9: { 'Phá Quân': 'Hóa Lộc', 'Cự Môn': 'Hóa Quyền', 'Thái Âm': 'Hóa Khoa', 'Tham Lang': 'Hóa Kỵ' }
        };

        const STAR_SCORES = {
            'Tử Vi': 3, 'Thiên Phủ': 3, 'Thái Dương': 3, 'Thái Âm': 3,
            'Thiên Cơ': 2, 'Vũ Khúc': 2, 'Thiên Đồng': 2, 'Thiên Tướng': 2, 'Thiên Lương': 2,
            'Liêm Trinh': 1, 'Tham Lang': 0, 'Cự Môn': -1, 'Thất Sát': 0, 'Phá Quân': -2,
            'Hóa Lộc': 2, 'Hóa Quyền': 2, 'Hóa Khoa': 2, 'Hóa Kỵ': -2,
            'Lộc Tồn': 2, 'Văn Xương': 2, 'Văn Khúc': 2, 'Thiên Khôi': 1, 'Thiên Việt': 1,
            'Tả Phù': 1, 'Hữu Bật': 1, 'Ân Quang': 1, 'Thiên Quý': 1, 'Hồng Loan': 1,
            'Thiên Hỷ': 1, 'Đào Hoa': 1, 'Long Trì': 1, 'Phượng Các': 1, 'Thiên Mã': 1,
            'Tam Thai': 1, 'Bát Tọa': 1, 'Thai Phụ': 1, 'Phong Cáo': 1, 'Quốc Ấn': 1,
            'Giải Thần': 1, 'Thiên Giải': 1, 'Địa Giải': 1, 'Thiên Đức': 1, 'Nguyệt Đức': 1,
            'Long Đức': 1, 'Phúc Đức': 1, 'Thiên Trù': 1, 'Thiên Quan': 1, 'Thiên Phúc': 1,
            'Thiên Thọ': 1, 'Thiên Tài': 1, 'Thanh Long': 1, 'Bác Sĩ': 1,
            'Địa Không': -3, 'Địa Kiếp': -3, 'Hỏa Tinh': -2, 'Linh Tinh': -2, 'Kình Dương': -2,
            'Đà La': -2, 'Đại Hao': -2, 'Bạch Hổ': -1, 'Tang Môn': -1, 'Thiên Hình': -1,
            'Thiên Khốc': -1, 'Thiên Hư': -1, 'Tuế Phá': -1, 'Phục Binh': -1, 'Quan Phù': -1,
            'Điếu Khách': -1, 'Trực Phù': -1, 'Bệnh Phù': -1, 'Tiểu Hao': -1, 'Kiếp Sát': -1,
            'Phá Toái': -1, 'Quả Tú': -1, 'Cô Thần': -1, 'Thiên La': -1, 'Địa Võng': -1
        };

        const VONG_THAI_TUE = ['Thái Tuế', 'Thiếu Dương', 'Tang Môn', 'Thiếu Âm', 'Quan Phù', 'Tử Phù', 'Tuế Phá', 'Long Đức', 'Bạch Hổ', 'Phúc Đức', 'Điếu Khách', 'Trực Phù'];
        const VONG_LOC_TON = ['Lộc Tồn', 'Bác Sĩ', 'Lực Sĩ', 'Thanh Long', 'Tiểu Hao', 'Tướng Quân', 'Tấu Thư', 'Phi Liêm', 'Bệnh Phù', 'Đại Hao', 'Phục Binh', 'Quan Phù'];
        const VONG_TRUONG_SINH = ['Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy', 'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'];

        let currentGeneratedBoard = null;

        function getNgNganhClass(starName) {
            if (['Thiên Cơ', 'Thiên Lương', 'Hóa Khoa', 'Long Đức', 'Tả Phù', 'Đào Hoa', 'Hồng Loan', 'Thiếu Dương', 'Thiếu Âm', 'LN Văn Tinh', 'Thiên Giải', 'Địa Giải', 'Thiên Thọ'].some(s => starName.includes(s))) {
                return 'c-moc'; // Mộc - Green
            }
            if (['Thiên Đồng', 'Thái Âm', 'Phá Quân', 'Tham Lang', 'Văn Khúc', 'Cự Môn', 'Thiên Tướng', 'Hóa Lộc', 'Hóa Quyền', 'Hóa Kỵ', 'Hóa Kị', 'Hữu Bật', 'Lưu Hà', 'Phi Liêm', 'Thiên Diêu', 'Thiên Y', 'Ân Quang', 'Thiên Quý', 'Lực Sĩ', 'Hoa Cái', 'Giải Thần', 'Long Trì', 'Phượng Các', 'Thanh Long', 'Thiên Trù', 'Nguyệt Đức', 'L.Thiên Mã'].some(s => starName.includes(s))) {
                return 'c-thuy'; // Thủy - Blue
            }
            if (['Liêm Trinh', 'Thái Dương', 'Linh Tinh', 'Hỏa Tinh', 'Hoả Tinh', 'Kình Dương', 'Đà La', 'Địa Không', 'Địa Kiếp', 'Thiên Hình', 'Đại Hao', 'Tiểu Hao', 'Tang Môn', 'Tuế Phá', 'Thiên Hư', 'Thiên Khốc', 'Bạch Hổ', 'Phục Binh', 'Quan Phù', 'Kiếp Sát', 'Phá Toái', 'Tử Phù', 'Trực Phù', 'Điếu Khách', 'Quả Tú', 'Cô Thần', 'Thiên Hỷ', 'Thiên Việt', 'Thiên Khôi', 'Thiên Quan', 'Thiên Tài', 'Thiên Mã', 'L.Tang Môn', 'L.Bạch Hổ', 'L.Kình Dương', 'L.Đà La', 'L.Thiên Khốc', 'L.Thiên Hư', 'L.Hỏa Tinh', 'L.Thái Tuế'].some(s => starName.includes(s))) {
                return 'c-hoa'; // Hỏa - Red
            }
            if (['Vũ Khúc', 'Thất Sát', 'Văn Xương', 'Quốc Ấn', 'Đường Phù', 'Thai Phụ', 'Phong Cáo', 'Đầu Quân', 'Thiên Thương', 'Thiên Sứ', 'Thiên La', 'Địa Võng'].some(s => starName.includes(s))) {
                return 'c-kim'; // Kim - Grey
            }
            return 'c-tho'; // Thổ - Gold
        }

        function getCanChiColorClass(canChiStr) {
            if (canChiStr.includes('Tỵ') || canChiStr.includes('Ngọ')) return 'c-hoa';
            if (canChiStr.includes('Dần') || canChiStr.includes('Mão')) return 'c-moc';
            if (canChiStr.includes('Tý') || canChiStr.includes('Hợi')) return 'c-thuy';
            if (canChiStr.includes('Thân') || canChiStr.includes('Dậu')) return 'c-kim';
            return 'c-tho';
        }

        function getCanIndex(year) { return (year - 4) % 10; }
        function getChiIndex(year) { return (year - 4) % 12; }

        function getHourChiIndex(hour) {
            if (hour === 23 || hour === 0) return 0;
            return Math.floor((hour + 1) / 2) % 12;
        }

        function printTuViBoard() {
            window.print();
        }

        function closeCungModal() {
            let m = document.getElementById('cungDetailModal');
            if (m) m.style.display = 'none';
        }

        function showCungModal(chiName) {
            if (!currentGeneratedBoard) return;
            let d = null;
            for (let k in currentGeneratedBoard.boardData) {
                if (currentGeneratedBoard.boardData[k].chiName === chiName) {
                    d = currentGeneratedBoard.boardData[k];
                    break;
                }
            }
            if (!d) return;

            let m = document.getElementById('cungDetailModal');
            if (!m) {
                m = document.createElement('div');
                m.id = 'cungDetailModal';
                m.className = 'tuvi-modal-overlay';
                document.body.appendChild(m);
            }

            let mainStarsStr = d.midStars.length > 0 ? d.midStars.map(s => s.name + ' (' + s.status + ')').join(', ') : 'Vô Chính Diệu (Mượn lực chiếu)';
            let leftStarsStr = d.leftStars.join(', ') || 'Không có';
            let rightStarsStr = d.rightStars.join(', ') || 'Không có';

            let scoreColor = d.score >= 5 ? '#2e7d32' : d.score >= 0 ? '#1565c0' : '#c62828';
            let scoreText = d.score > 0 ? '+' + d.score : d.score;

            let tamMinhHtml = `
                <div class="tam-minh-modal-box">
                    <div class="tm-aspect">
                        <div class="tm-title"><i class="fa-solid fa-cloud-sun"></i> THIÊN MINH (Căn Cơ Bẩm Sinh)</div>
                        <div class="tm-desc">Cung <strong>${d.funcName}</strong> an tại <strong>${d.cungCanChi}</strong> (${d.chiName}). ${d.midStars.length > 0 ? 'Có chính tinh tọa thủ: ' + mainStarsStr + '.' : 'Cung Vô Chính Diệu, chịu ảnh hưởng từ cung xung chiếu và tam hợp.'} Phản ánh bản chất nguyên thủy và xu hướng vận hành tư duy bẩm sinh.</div>
                    </div>
                    <div class="tm-aspect">
                        <div class="tm-title"><i class="fa-solid fa-mountain-city"></i> ĐỊA MINH (Môi Trường & Cát Hung Định Lượng)</div>
                        <div class="tm-desc">Trạng thái vòng Trường Sinh: <strong>${d.truongSinh}</strong>. Điểm định lượng Tử Vi Số Phái: <strong style="color: ${scoreColor};">${scoreText} điểm</strong>. ${d.score >= 3 ? 'Cơ hội và môi trường bổ trợ rất thuận lợi cho công danh, sự nghiệp.' : d.score < 0 ? 'Hoàn cảnh nhiều thử thách rủi ro, cần cẩn trọng rèn luyện.' : 'Thế trận cân bằng, cần phát huy động lực cá nhân.'}</div>
                    </div>
                    <div class="tm-aspect">
                        <div class="tm-title"><i class="fa-solid fa-user-gear"></i> NHÂN MINH (Định Hướng Cải Biến)</div>
                        <div class="tm-desc">${d.isMenh ? 'Cung Mệnh là thuyền trưởng cuộc đời. Giữ Tâm sáng lành, phát huy ưu thế chính tinh, học cách chế ngự các sát tinh.' : d.isThan ? 'Cung Thân quyết định hành động thực tế hậu vận. Cần kiên trì, tu dưỡng đức hạnh và chủ động nắm bắt cơ hội.' : 'Giai đoạn Đại hạn ' + d.daiHan + ' tuổi: Chủ động lập kế hoạch rõ ràng, hóa giải hung khí bằng hành động thiện lương và trí tuệ.'}</div>
                    </div>
                </div>
            `;

            m.innerHTML = `
                <div class="tuvi-modal-content">
                    <div class="tuvi-modal-header">
                        <h3><i class="fa-solid fa-compass"></i> Luận Giải Chi Tiết Cung ${d.funcName} (${d.cungCanChi})</h3>
                        <span class="tuvi-modal-close" onclick="closeCungModal()">&times;</span>
                    </div>
                    <div class="tuvi-modal-body">
                        <div style="display: flex; gap: 12px; margin-bottom: 15px; flex-wrap: wrap;">
                            <div class="tuvi-stat-chip">Chính Tinh: <strong>${mainStarsStr}</strong></div>
                            <div class="tuvi-stat-chip">Trường Sinh: <strong>${d.truongSinh}</strong></div>
                            <div class="tuvi-stat-chip">Đại Hạn: <strong>${d.daiHan} tuổi</strong></div>
                            <div class="tuvi-stat-chip" style="background: ${scoreColor}; color: #fff;">Điểm Định Lượng: <strong>${scoreText} điểm</strong></div>
                        </div>
                        <div style="margin-bottom: 10px;"><strong>Cát tinh & Phụ tinh bên trái:</strong> ${leftStarsStr}</div>
                        <div style="margin-bottom: 15px;"><strong>Hung sát tinh & Phụ tinh bên phải:</strong> ${rightStarsStr}</div>
                        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 15px 0;">
                        ${tamMinhHtml}
                    </div>
                    <div class="tuvi-modal-footer">
                        <button class="btn-an-sao" onclick="closeCungModal()"><i class="fa-solid fa-check"></i> Hoàn thành xem</button>
                    </div>
                </div>
            `;
            m.style.display = 'flex';
        }

        function generateClassicTuViChart(e) {
            e.preventDefault();

            let name = document.getElementById('cName').value.trim() || 'Group FB Tử Vi Việt Nam';
            let genderRadios = document.getElementsByName('cGender');
            let gender = 'Nam';
            for (let r of genderRadios) { if (r.checked) gender = r.value; }

            let calRadios = document.getElementsByName('cCalendarType');
            let calType = 'duong';
            for (let r of calRadios) { if (r.checked) calType = r.value; }

            let inYear = parseInt(document.getElementById('cYear').value);
            let inMonth = parseInt(document.getElementById('cMonth').value);
            let inDay = parseInt(document.getElementById('cDay').value);
            let hour = parseInt(document.getElementById('cHour').value);
            let minute = parseInt(document.getElementById('cMinute').value);
            let viewYear = parseInt(document.getElementById('cViewYear').value);

            let solarDate, lunarDate;
            if (calType === 'duong') {
                solarDate = { day: inDay, month: inMonth, year: inYear };
                lunarDate = convertSolarToLunar(inDay, inMonth, inYear);
            } else {
                lunarDate = { day: inDay, month: inMonth, year: inYear };
                solarDate = convertLunarToSolar(inDay, inMonth, inYear);
            }

            let julianDay = getJulianDay(solarDate.day, solarDate.month, solarDate.year);

            let yearCanIdx = getCanIndex(lunarDate.year);
            let yearChiIdx = getChiIndex(lunarDate.year);
            let yearCan = CAN_NAMES[yearCanIdx];
            let yearChi = CHI_NAMES[yearChiIdx];

            let monthCanIdx = (yearCanIdx * 2 + lunarDate.month + 1) % 10;
            let monthChiIdx = (lunarDate.month + 1) % 12;
            let monthCan = CAN_NAMES[monthCanIdx];
            let monthChi = CHI_NAMES[monthChiIdx];

            let dayCanIdx = (julianDay + 9) % 10;
            let dayChiIdx = (julianDay + 1) % 12;
            let dayCan = CAN_NAMES[dayCanIdx];
            let dayChi = CHI_NAMES[dayChiIdx];

            let hourChiIdx = getHourChiIndex(hour);
            let hourCanIdx = (dayCanIdx * 2 + hourChiIdx) % 10;
            let hourCan = CAN_NAMES[hourCanIdx];
            let hourChi = CHI_NAMES[hourChiIdx];

            let viewYearCanIdx = getCanIndex(viewYear);
            let viewYearChiIdx = getChiIndex(viewYear);
            let viewYearCan = CAN_NAMES[viewYearCanIdx];
            let viewYearChi = CHI_NAMES[viewYearChiIdx];

            let age = (viewYear - lunarDate.year) + 1;

            let isAmYear = (yearCanIdx % 2 !== 0);
            let amDuongGender = "";
            if (!isAmYear && gender === 'Nam') amDuongGender = 'Dương Nam';
            else if (!isAmYear && gender === 'Nữ') amDuongGender = 'Dương Nữ';
            else if (isAmYear && gender === 'Nam') amDuongGender = 'Âm Nam';
            else amDuongGender = 'Âm Nữ';

            let napAm = NAP_AM_NAMES[yearCan + ' ' + yearChi] || 'Bạch Lập Kim';
            let chuMenh = CHU_MENH_MAP[yearChi] || 'Liêm Trinh';
            let chuThan = CHU_THAN_MAP[yearChi] || 'Thiên Cơ';

            // Mệnh & Thân Placement
            let monthPos = (2 + lunarDate.month - 1) % 12;
            let menhChiIdx = (monthPos - hourChiIdx + 12) % 12;
            let thanChiIdx = (monthPos + hourChiIdx) % 12;

            // Cung Dần Can Index (Ngũ Hổ Tấn)
            let cungDanCanIdx = (yearCanIdx * 2 + 2) % 10;
            let cungMenhCanIdx = (cungDanCanIdx + (menhChiIdx - 2 + 12) % 12) % 10;
            let cungMenhCan = CAN_NAMES[cungMenhCanIdx];
            let cungMenhChi = CHI_NAMES[menhChiIdx];
            let cungMenhNapAm = NAP_AM_NAMES[cungMenhCan + ' ' + cungMenhChi] || 'Trường Lưu Thủy';

            // Cục calculation
            let cucNum = 2;
            if (cungMenhNapAm.includes('Thủy')) cucNum = 2;
            else if (cungMenhNapAm.includes('Mộc')) cucNum = 3;
            else if (cungMenhNapAm.includes('Kim')) cucNum = 4;
            else if (cungMenhNapAm.includes('Thổ')) cucNum = 5;
            else if (cungMenhNapAm.includes('Hỏa')) cucNum = 6;
            let cucName = CUC_NAMES[cucNum];

            // An Vị Tử Vi & Thiên Phủ
            let tuViChiIdx = 0;
            let dayL = lunarDate.day;
            let rem = dayL % cucNum;
            let quot = Math.floor(dayL / cucNum);
            if (rem === 0) {
                tuViChiIdx = (2 + quot - 1) % 12;
            } else {
                let add = cucNum - rem;
                let newQ = quot + 1;
                let base = (2 + newQ - 1) % 12;
                if (add % 2 === 0) {
                    tuViChiIdx = (base + add) % 12;
                } else {
                    tuViChiIdx = (base - add + 12) % 12;
                }
            }

            let thienPhuChiIdx = (4 - tuViChiIdx + 12) % 12;
            let isThuan = (amDuongGender === 'Dương Nam' || amDuongGender === 'Âm Nữ');

            // Thân cư Cung Name
            let thanDist = (thanChiIdx - menhChiIdx + 12) % 12;
            let thanCungBaseName = CUNG_NAMES_ORDER[thanDist].replace('<THÂN>', '').trim();
            let thanCuText = 'Thân cư ' + (thanCungBaseName.charAt(0) + thanCungBaseName.slice(1).toLowerCase());

            let boardData = {};
            for (let i = 0; i < 12; i++) {
                let dist = (i - menhChiIdx + 12) % 12;
                let fName = CUNG_NAMES_ORDER[dist];
                if (i === thanChiIdx && fName !== 'PHÚC <THÂN>') {
                    if (!fName.includes('<THÂN>')) fName += ' <THÂN>';
                }

                let daiHanNum = 0;
                if (isThuan) {
                    daiHanNum = (dist) * 10 + cucNum;
                } else {
                    let distNghich = (menhChiIdx - i + 12) % 12;
                    daiHanNum = (distNghich) * 10 + cucNum;
                }

                let cungCanIdx = (cungDanCanIdx + (i - 2 + 12) % 12) % 10;
                let cungCanPrefix = CAN_SHORT_NAMES[cungCanIdx];
                let cungCanChiStr = cungCanPrefix + CHI_NAMES[i];

                boardData[i] = {
                    chiIdx: i,
                    chiName: CHI_NAMES[i],
                    cungCanChi: cungCanChiStr,
                    cungColorClass: getCanChiColorClass(CHI_NAMES[i]),
                    funcName: fName,
                    daiHan: daiHanNum,
                    isThan: (i === thanChiIdx),
                    isMenh: (i === menhChiIdx),
                    leftStars: [],
                    midStars: [],
                    rightStars: [],
                    truongSinh: '',
                    score: 0
                };
            }

            // 1. DYNAMIC AN MAIN STARS (14 CHÍNH TINH) - Clean names without merged Tu Hoa
            const mainStarPositions = [
                { name: 'Tử Vi', pos: (tuViChiIdx) % 12 },
                { name: 'Thiên Cơ', pos: (tuViChiIdx + 11) % 12 },
                { name: 'Thái Dương', pos: (tuViChiIdx + 9) % 12 },
                { name: 'Vũ Khúc', pos: (tuViChiIdx + 8) % 12 },
                { name: 'Thiên Đồng', pos: (tuViChiIdx + 7) % 12 },
                { name: 'Liêm Trinh', pos: (tuViChiIdx + 4) % 12 },
                { name: 'Thiên Phủ', pos: (thienPhuChiIdx) % 12 },
                { name: 'Thái Âm', pos: (thienPhuChiIdx + 1) % 12 },
                { name: 'Tham Lang', pos: (thienPhuChiIdx + 2) % 12 },
                { name: 'Cự Môn', pos: (thienPhuChiIdx + 3) % 12 },
                { name: 'Thiên Tướng', pos: (thienPhuChiIdx + 4) % 12 },
                { name: 'Thiên Lương', pos: (thienPhuChiIdx + 5) % 12 },
                { name: 'Thất Sát', pos: (thienPhuChiIdx + 6) % 12 },
                { name: 'Phá Quân', pos: (thienPhuChiIdx + 10) % 12 }
            ];

            let starLocateMap = {};

            mainStarPositions.forEach(st => {
                let stPos = st.pos;
                let bStatus = STAR_BRIGHTNESS[st.name] ? STAR_BRIGHTNESS[st.name][stPos] : 'B';
                boardData[stPos].midStars.push({ name: st.name, status: bStatus, baseName: st.name });
                starLocateMap[st.name] = { pos: stPos, status: bStatus };
            });

            // 2. DYNAMIC AN AUXILIARY STARS (Văn Xương, Văn Khúc, Tả, Hữu)
            let vanXuongPos = (10 - hourChiIdx + 12) % 12;
            let vanKhucPos = (4 + hourChiIdx) % 12;
            const VAN_XUONG_BRIGHTNESS = ['Đ', 'M', 'Đ', 'H', 'V', 'H', 'H', 'Đ', 'Đ', 'M', 'V', 'H'];
            const VAN_KHUC_BRIGHTNESS = ['Đ', 'M', 'H', 'H', 'V', 'H', 'Đ', 'Đ', 'H', 'M', 'V', 'H'];
            let vanXuongStatus = VAN_XUONG_BRIGHTNESS[vanXuongPos];
            let vanKhucStatus = VAN_KHUC_BRIGHTNESS[vanKhucPos];

            boardData[vanXuongPos].leftStars.push('Văn Xương(' + vanXuongStatus + ')');
            boardData[vanKhucPos].leftStars.push('Văn Khúc(' + vanKhucStatus + ')');
            starLocateMap['Văn Xương'] = { pos: vanXuongPos, status: vanXuongStatus };
            starLocateMap['Văn Khúc'] = { pos: vanKhucPos, status: vanKhucStatus };

            let taPhuPos = (4 + lunarDate.month - 1) % 12;
            let huuBatPos = (10 - (lunarDate.month - 1) + 12) % 12;
            boardData[taPhuPos].leftStars.push('Tả Phù');
            boardData[huuBatPos].leftStars.push('Hữu Bật');
            starLocateMap['Tả Phù'] = { pos: taPhuPos, status: 'Đ' };
            starLocateMap['Hữu Bật'] = { pos: huuBatPos, status: 'Đ' };

            // 3. AN TỨ HÓA NĂM SINH AS STANDALONE AUXILIARY STARS
            let tuHoaThisYear = TU_HOA_MAP[yearCanIdx] || {};
            for (let targetStar in tuHoaThisYear) {
                let hoaType = tuHoaThisYear[targetStar]; // Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ
                let starInfo = starLocateMap[targetStar];
                if (starInfo) {
                    let hStatus = starInfo.status || 'V';
                    let hoaStarName = hoaType + '(' + hStatus + ')';
                    if (hoaType === 'Hóa Kỵ') {
                        boardData[starInfo.pos].rightStars.push(hoaStarName);
                    } else {
                        boardData[starInfo.pos].leftStars.push(hoaStarName);
                    }
                }
            }

            // 4. DYNAMIC AN VÒNG LỘC TỒN (12 SAO)
            const locTonCanMap = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
            let locTonStart = locTonCanMap[yearCanIdx];
            let dirLocTon = isThuan ? 1 : -1;
            VONG_LOC_TON.forEach((sName, idx) => {
                let pos = (locTonStart + idx * dirLocTon + 120) % 12;
                let isDacHao = [2, 3, 8, 9].includes(pos);
                if (idx === 0) {
                    boardData[pos].leftStars.push(sName + '(M)');
                } else if (idx === 4 || idx === 9) {
                    boardData[pos].rightStars.push(sName + (isDacHao ? '(Đ)' : '(H)'));
                } else {
                    boardData[pos].leftStars.push(sName);
                }
            });

            // LN Văn Tinh, Đường Phù, Quốc Ấn
            const lnVanTinhMap = [5, 6, 8, 9, 8, 9, 11, 0, 2, 3];
            boardData[lnVanTinhMap[yearCanIdx]].leftStars.push('LN Văn Tinh');
            let duongPhuPos = (locTonStart + 5) % 12;
            let quocAnPos = (locTonStart + 8) % 12;
            boardData[duongPhuPos].leftStars.push('Đường Phù');
            boardData[quocAnPos].leftStars.push('Quốc Ấn');

            // 5. DYNAMIC AN VÒNG THÁI TUẾ (12 SAO)
            VONG_THAI_TUE.forEach((sName, idx) => {
                let pos = (yearChiIdx + idx) % 12;
                let isDac = [2, 3, 8, 9].includes(pos);
                if (['Tang Môn', 'Bạch Hổ'].includes(sName)) {
                    boardData[pos].rightStars.push(sName + (isDac ? '(Đ)' : '(H)'));
                } else if (['Tử Phù', 'Tuế Phá', 'Điếu Khách', 'Trực Phù'].includes(sName)) {
                    boardData[pos].rightStars.push(sName + (isDac ? '(Đ)' : '(H)'));
                } else {
                    boardData[pos].leftStars.push(sName);
                }
            });

            // 6. DYNAMIC AN VÒNG TRƯỜNG SINH (12 TRẠNG THÁI)
            const truongSinhCucMap = { 2: 8, 3: 11, 4: 8, 5: 8, 6: 2 };
            let tsStart = truongSinhCucMap[cucNum] || 8;
            let dirTS = isThuan ? 1 : -1;
            VONG_TRUONG_SINH.forEach((tsName, idx) => {
                let pos = (tsStart + idx * dirTS + 120) % 12;
                boardData[pos].truongSinh = tsName;
            });

            // 7. OTHER AUXILIARY STARS
            const khoiVietMap = [
                [1, 7], [0, 8], [11, 9], [11, 9], [1, 7],
                [0, 8], [2, 6], [2, 6], [3, 5], [3, 5]
            ];
            let kv = khoiVietMap[yearCanIdx];
            boardData[kv[0]].leftStars.push('Thiên Khôi');
            boardData[kv[1]].leftStars.push('Thiên Việt');

            let kinhDuongPos = (locTonStart + 1) % 12;
            let daLaPos = (locTonStart - 1 + 12) % 12;
            let isDacKinhDa = [2, 4, 5, 8, 10, 11].includes(kinhDuongPos);
            boardData[kinhDuongPos].rightStars.push('Kình Dương(' + (isDacKinhDa ? 'Đ' : 'H') + ')');
            boardData[daLaPos].rightStars.push('Đà La(' + (isDacKinhDa ? 'Đ' : 'H') + ')');

            let diaKhongPos = (11 - hourChiIdx + 12) % 12;
            let diaKiepPos = (11 + hourChiIdx) % 12;
            let isDacKhongKiep = [2, 3, 8, 9, 5, 11].includes(diaKhongPos);
            boardData[diaKhongPos].rightStars.push('Địa Không(' + (isDacKhongKiep ? 'Đ' : 'H') + ')');
            boardData[diaKiepPos].rightStars.push('Địa Kiếp(' + (isDacKhongKiep ? 'Đ' : 'H') + ')');

            const hoaStartMap = [1, 2, 3, 9];
            let nGroup = (yearChiIdx % 4 === 2) ? 0 : (yearChiIdx % 4 === 0) ? 1 : (yearChiIdx % 4 === 1) ? 2 : 3;
            let hoaPos = isThuan ? (hoaStartMap[nGroup] + hourChiIdx) % 12 : (hoaStartMap[nGroup] - hourChiIdx + 12) % 12;
            let linhPos = isThuan ? (10 - hourChiIdx + 12) % 12 : (10 + hourChiIdx) % 12;
            boardData[hoaPos].rightStars.push('Hỏa Tinh(H)');
            boardData[linhPos].rightStars.push('Linh Tinh(H)');

            let daoHoaMap = [9, 6, 3, 0, 9, 6, 3, 0, 9, 6, 3, 0];
            let hongLoanPos = (3 - yearChiIdx + 12) % 12;
            let thienHyPos = (hongLoanPos + 6) % 12;
            boardData[daoHoaMap[yearChiIdx]].leftStars.push('Đào Hoa');
            boardData[hongLoanPos].leftStars.push('Hồng Loan');
            boardData[thienHyPos].leftStars.push('Thiên Hỷ');

            let longTriPos = (4 + yearChiIdx) % 12;
            let phongCacPos = (10 - yearChiIdx + 12) % 12;
            let hoaCaiMap = [4, 1, 10, 7, 4, 1, 10, 7, 4, 1, 10, 7];
            boardData[longTriPos].leftStars.push('Long Trì');
            boardData[phongCacPos].leftStars.push('Phượng Các');
            boardData[hoaCaiMap[yearChiIdx]].leftStars.push('Hoa Cái');

            let thienMaMap = [8, 5, 2, 11, 8, 5, 2, 11, 8, 5, 2, 11];
            let kiepSatMap = [5, 2, 11, 8, 5, 2, 11, 8, 5, 2, 11];
            let thienMaPos = thienMaMap[yearChiIdx];
            let isDacMa = [2, 5].includes(thienMaPos);
            boardData[thienMaPos].leftStars.push('Thiên Mã' + (isDacMa ? '(Đ)' : ''));
            boardData[kiepSatMap[yearChiIdx]].rightStars.push('Kiếp Sát');

            let anQuangPos = (vanXuongPos + lunarDate.day - 2 + 120) % 12;
            let thienQuyPos = (vanKhucPos - lunarDate.day + 2 + 120) % 12;
            let tamThaiPos = (taPhuPos + lunarDate.day - 1 + 120) % 12;
            let batToaPos = (huuBatPos - lunarDate.day + 1 + 120) % 12;
            boardData[anQuangPos].leftStars.push('Ân Quang');
            boardData[thienQuyPos].leftStars.push('Thiên Quý');
            boardData[tamThaiPos].leftStars.push('Tam Thai');
            boardData[batToaPos].leftStars.push('Bát Tọa');

            let thienHinhPos = (9 + lunarDate.month - 1) % 12;
            let thienHinhStatus = [2, 3, 9, 10].includes(thienHinhPos) ? 'Đ' : 'H';
            boardData[thienHinhPos].rightStars.push('Thiên Hình(' + thienHinhStatus + ')');

            let thienDieuPos = (1 + lunarDate.month - 1) % 12;
            let thienDieuStatus = [5, 9, 1].includes(thienDieuPos) ? 'Đ' : 'H';
            boardData[thienDieuPos].rightStars.push('Thiên Diêu(' + thienDieuStatus + ')');
            boardData[thienDieuPos].leftStars.push('Thiên Y');

            let thienGiaiPos = (8 + lunarDate.month - 1) % 12;
            let diaGiaiPos = (7 + lunarDate.month - 1) % 12;
            boardData[thienGiaiPos].leftStars.push('Thiên Giải');
            boardData[diaGiaiPos].leftStars.push('Địa Giải');

            let thienKhocPos = (6 - yearChiIdx + 120) % 12;
            let thienHuPos = (6 + yearChiIdx) % 12;
            let isDacKhocHu = [0, 3, 6, 9].includes(thienKhocPos);
            boardData[thienKhocPos].rightStars.push('Thiên Khốc' + (isDacKhocHu ? '(Đ)' : ''));
            boardData[thienHuPos].rightStars.push('Thiên Hư' + (isDacKhocHu ? '(Đ)' : ''));

            let dauQuanPos = (yearChiIdx - lunarDate.month + 1 + hourChiIdx + 120) % 12;
            boardData[dauQuanPos].rightStars.push('Đầu Quân');

            let phaToaiMap = [5, 9, 1, 5, 9, 1, 5, 9, 1, 5, 9, 1];
            boardData[phaToaiMap[yearChiIdx]].rightStars.push('Phá Toái');

            let coThanMap = [2, 2, 5, 5, 5, 8, 8, 8, 11, 11, 11, 2];
            let quaTuMap = [10, 10, 1, 1, 1, 4, 4, 4, 7, 7, 7, 10];
            boardData[coThanMap[yearChiIdx]].rightStars.push('Cô Thần');
            boardData[quaTuMap[yearChiIdx]].rightStars.push('Quả Tú');

            boardData[4].rightStars.push('Thiên La');
            boardData[10].rightStars.push('Địa Võng');
            boardData[(menhChiIdx + 5) % 12].rightStars.push('Thiên Thương');
            boardData[(menhChiIdx + 7) % 12].rightStars.push('Thiên Sứ');

            // Tuần & Triệt Positions
            const trietMap = [ [8, 9], [6, 7], [4, 5], [2, 3], [0, 1], [8, 9], [6, 7], [4, 5], [2, 3], [0, 1] ];
            let trietPositions = trietMap[yearCanIdx];

            // 8. LƯU NIÊN TINH
            let lThaiTuePos = viewYearChiIdx;
            let lLocTonPos = locTonCanMap[viewYearCanIdx];
            let lKinhDuongPos = (lLocTonPos + 1) % 12;
            let lDaLaPos = (lLocTonPos - 1 + 12) % 12;
            let lThienMaPos = thienMaMap[viewYearChiIdx];
            let lTangMonPos = (lThaiTuePos + 2) % 12;
            let lBachHoPos = (lThaiTuePos + 8) % 12;
            let lThienKhocPos = (6 - viewYearChiIdx + 120) % 12;
            let lThienHuPos = (6 + viewYearChiIdx) % 12;

            boardData[lThaiTuePos].rightStars.push('L.Thái Tuế');
            boardData[lLocTonPos].leftStars.push('L.Lộc Tồn');
            boardData[lKinhDuongPos].rightStars.push('L.Kình Dương');
            boardData[lDaLaPos].rightStars.push('L.Đà La');
            boardData[lThienMaPos].leftStars.push('L.Thiên Mã');
            boardData[lTangMonPos].rightStars.push('L.Tang Môn');
            boardData[lBachHoPos].rightStars.push('L.Bạch Hổ');
            boardData[lThienKhocPos].rightStars.push('L.Thiên Khốc');
            boardData[lThienHuPos].rightStars.push('L.Thiên Hư');

            // 9. COMPUTING QUANTITATIVE SCORES
            let totalChartScore = 0;
            let posCount = 0;
            let negCount = 0;

            for (let i = 0; i < 12; i++) {
                let pScore = 0;
                let d = boardData[i];

                d.midStars.forEach(s => {
                    let sc = STAR_SCORES[s.baseName] || 0;
                    if (s.status === 'M' || s.status === 'V') sc += 1;
                    if (s.status === 'H') sc -= 1;
                    pScore += sc;
                });

                d.leftStars.forEach(s => {
                    let cleanName = s.split(' ')[0].replace(/\(.*\)/, '').trim();
                    let sc = STAR_SCORES[cleanName] || 1;
                    pScore += sc;
                });

                d.rightStars.forEach(s => {
                    let cleanName = s.split(' ')[0].replace(/\(.*\)/, '').trim();
                    let sc = STAR_SCORES[cleanName] || -1;
                    pScore += sc;
                });

                d.score = pScore;
                totalChartScore += pScore;
                if (pScore > 0) posCount++;
                else if (pScore < 0) negCount++;
            }

            currentGeneratedBoard = { boardData, totalChartScore, posCount, negCount, menhChiIdx, thanChiIdx };

            // 10. RENDER EXACT CELL TABLE (Matching TuViVietNam.vn 100%)
            function renderCungTd(idx) {
                let d = boardData[idx];
                let menhStyle = d.isMenh ? 'style="background: rgba(255, 248, 225, 0.95); border: 2px solid #d4af37;"' : '';

                // Calculate opposite/axis Chi for bottom-left (4 - idx + 12) % 12
                let bottomChi = CHI_NAMES[(4 - idx + 12) % 12];
                let displayFuncName = d.isThan ? d.funcName + ' <THÂN>' : d.funcName;

                return `
                    <td ${menhStyle} onclick="showCungModal('${d.chiName}')">
                        <div class="classic-cung-header">
                            <span class="cung-can-chi">${d.cungCanChi}</span>
                            <span class="cung-func-name">${displayFuncName}</span>
                            <span class="cung-dai-han">${d.daiHan}</span>
                        </div>
                        <div class="classic-cung-body">
                            <div class="cung-main-stars-block">
                                ${d.midStars.map(s => '<div class="' + getNgNganhClass(s.name) + '">' + s.name + '(' + s.status + ')</div>').join('')}
                            </div>
                            <div class="cung-aux-stars-block">
                                <div class="star-col-left">
                                    ${d.leftStars.map(s => '<div class="' + getNgNganhClass(s) + '">' + s + '</div>').join('')}
                                </div>
                                <div class="star-col-right">
                                    ${d.rightStars.map(s => '<div class="' + getNgNganhClass(s) + '">' + s + '</div>').join('')}
                                </div>
                            </div>
                        </div>
                        <div class="classic-cung-footer">
                            <span>${bottomChi}</span>
                            <span>${d.truongSinh}</span>
                            <span>Tháng ${((idx - 0 + 12) % 12) + 1}</span>
                        </div>
                    </td>
                `;
            }

            // Calculate Tuần & Triệt Badge Positions
            let tuanStart = (yearChiIdx - yearCanIdx + 12) % 12;
            let tuanP1 = (tuanStart + 10) % 12;
            let tuanP2 = (tuanStart + 11) % 12;
            let trietP1 = trietPositions[0];
            let trietP2 = trietPositions[1];

            function getPairKey(p1, p2) {
                let a = Math.min(p1, p2);
                let b = Math.max(p1, p2);
                if (a === 0 && b === 11) return '11-0';
                return a + '-' + b;
            }

            let tuanKey = getPairKey(tuanP1, tuanP2);
            let trietKey = getPairKey(trietP1, trietP2);

            const borderStylesMap = {
                '5-6': 'top: 0; left: 25%; transform: translate(-50%, -50%);',
                '6-7': 'top: 0; left: 50%; transform: translate(-50%, -50%);',
                '7-8': 'top: 0; left: 75%; transform: translate(-50%, -50%);',
                '8-9': 'top: 25%; right: 0; transform: translate(50%, -50%);',
                '9-10': 'top: 50%; right: 0; transform: translate(50%, -50%);',
                '10-11': 'top: 75%; right: 0; transform: translate(50%, -50%);',
                '11-0': 'bottom: 0; left: 75%; transform: translate(-50%, 50%);',
                '0-1': 'bottom: 0; left: 50%; transform: translate(-50%, 50%);',
                '1-2': 'bottom: 0; left: 25%; transform: translate(-50%, 50%);',
                '2-3': 'top: 75%; left: 0; transform: translate(-50%, -50%);',
                '3-4': 'top: 50%; left: 0; transform: translate(-50%, -50%);',
                '4-5': 'top: 25%; left: 0; transform: translate(-50%, -50%);'
            };

            let indicatorHtml = '';
            if (tuanKey === trietKey) {
                let st = borderStylesMap[tuanKey] || 'top: 25%; right: 0; transform: translate(50%, -50%);';
                indicatorHtml = `<div class="indicator-bar" style="${st}">Tuần - Triệt</div>`;
            } else {
                let stTuan = borderStylesMap[tuanKey];
                let stTriet = borderStylesMap[trietKey];
                if (stTuan) indicatorHtml += `<div class="indicator-bar" style="${stTuan}">Tuần</div>`;
                if (stTriet) indicatorHtml += `<div class="indicator-bar" style="${stTriet}">Triệt</div>`;
            }

            // Determine Mệnh Cục Relationship
            let menhCucRelation = 'Mệnh Cục bình hoà';
            if (napAm.includes('Thổ') && cucName.includes('Thổ')) menhCucRelation = 'Mệnh Cục bình hoà';
            else if (napAm.includes('Thủy') && cucName.includes('Kim')) menhCucRelation = 'Cục sinh Mệnh';
            else if (napAm.includes('Mộc') && cucName.includes('Thủy')) menhCucRelation = 'Cục sinh Mệnh';

            let boardHtml = `
                <div style="position: relative;">
                    ${indicatorHtml}

                    <table class="classic-tuvi-board">
                        <tr>
                            ${renderCungTd(5)}
                            ${renderCungTd(6)}
                            ${renderCungTd(7)}
                            ${renderCungTd(8)}
                        </tr>
                        <tr>
                            ${renderCungTd(4)}
                            <td colspan="2" rowspan="2" style="padding: 0;">
                                <div class="classic-center-box">
                                    <div>
                                        <div style="color: #c00000; font-weight: 700; font-size: 1.05rem; letter-spacing: 0.5px;">DIỄN ĐÀN TỬ VI VIỆT NAM</div>
                                        <div style="color: #c00000; font-size: 0.82rem; font-weight: 600; margin-bottom: 2px;">http://www.tuvivietnam.vn</div>
                                        <div style="color: #0d47a1; font-family: var(--font-serif); font-size: 1.55rem; font-weight: 900; letter-spacing: 2px; margin: 4px 0 6px 0;">LÁ SỐ TỬ VI</div>
                                    </div>
                                    
                                    <div style="text-align: left; padding: 0 1.2rem; font-size: 0.88rem; line-height: 1.55;">
                                        <div style="display: grid; grid-template-columns: 82px 1fr; gap: 2px;">
                                            <span>Họ tên:</span> <strong>${name}</strong>
                                            <span>Năm:</span> <strong>${solarDate.year} (${yearCan} ${yearChi})</strong>
                                            <span>Tháng:</span> <strong>${solarDate.month < 10 ? '0' + solarDate.month : solarDate.month} (${lunarDate.month < 10 ? '0' + lunarDate.month : lunarDate.month}) ${monthCan} ${monthChi}</strong>
                                            <span>Ngày:</span> <strong>${solarDate.day < 10 ? '0' + solarDate.day : solarDate.day} (${lunarDate.day < 10 ? '0' + lunarDate.day : lunarDate.day}) ${dayCan} ${dayChi}</strong>
                                            <span>Giờ:</span> <strong>${hour} giờ ${minute} phút ${hourCan} ${hourChi}</strong>
                                            <span>Năm xem:</span> <strong>${viewYear} (${viewYearCan} ${viewYearChi}) - ${age} tuổi</strong>
                                            <span>Âm Dương:</span> <span style="color: #0d47a1; font-weight: 700;">${amDuongGender}</span>
                                            <span>Mệnh:</span> <span style="color: #0d47a1; font-weight: 700;">${napAm}</span>
                                            <span>Cục:</span> <span style="color: #0d47a1; font-weight: 700;">${cucName}</span>
                                            <span>Chủ Mệnh:</span> <span style="color: #0d47a1; font-weight: 700;">${chuMenh}</span>
                                            <span>Chủ Thân:</span> <span style="color: #0d47a1; font-weight: 700;">${chuThan}</span>
                                        </div>
                                        
                                        <div style="margin-top: 8px; color: #0d47a1; font-weight: 700; display: flex; flex-direction: column; gap: 2px;">
                                            <div>${isThuan ? 'Âm Dương thuận lý' : 'Âm Dương nghịch lý'}</div>
                                            <div>${menhCucRelation}</div>
                                            <div>${thanCuText}</div>
                                        </div>
                                    </div>

                                    <div style="font-size: 0.78rem; color: #555; margin-top: 4px; display: flex; gap: 8px; justify-content: center;">
                                        <button class="btn-an-sao" style="font-size: 0.75rem; padding: 4px 10px;" onclick="printTuViBoard()"><i class="fa-solid fa-print"></i> In / Xuất PDF</button>
                                    </div>

                                    <!-- Seal Stamp & Chinese Calligraphy -->
                                    <div style="position: absolute; bottom: 12px; right: 16px; text-align: center; pointer-events: none; opacity: 0.85;">
                                        <div style="font-family: 'STKaiti', 'KaiTi', 'Times New Roman', serif; font-size: 1.35rem; font-weight: 900; line-height: 1.1; color: #222; letter-spacing: 2px;">
                                            紫<br>微<br>越<br>南
                                        </div>
                                        <div style="border: 2px solid #b71c1c; color: #b71c1c; padding: 1px 3px; font-weight: 800; font-size: 0.62rem; margin-top: 4px; border-radius: 2px; background: rgba(255,255,255,0.7);">
                                            印印
                                        </div>
                                    </div>
                                </div>
                            </td>
                            ${renderCungTd(9)}
                        </tr>
                        <tr>
                            ${renderCungTd(3)}
                            ${renderCungTd(10)}
                        </tr>
                        <tr>
                            ${renderCungTd(2)}
                            ${renderCungTd(1)}
                            ${renderCungTd(0)}
                            ${renderCungTd(11)}
                        </tr>
                    </table>
                </div>
            `;

            let area = document.getElementById('classicBoardArea');
            area.style.display = "block";
            area.innerHTML = boardHtml;
            area.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    


// Sidebar Menu Navigation & Tab Switcher Handler
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.toc-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            
            // 1. Switch to Full Textbook Tab if not active
            switchTab('tab-full-text');
            
            // 2. Highlight active link in sidebar
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 3. Scroll to target section
            setTimeout(() => {
                const targetElem = document.getElementById(targetId);
                if (targetElem) {
                    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.warn('Target element not found:', targetId);
                }
            }, 100);
        });
    });
});
