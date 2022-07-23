# TOEIC-PWA
A pwa that supports learning and practicing for the toeic exam

Tech stacks:
- fe: next + zustand + tailwind
- be: nest + prisma
- db: mysql
- cache: redis
- testing: jest
- deploy: docker

Features:
- login/logout (lưu setting người dùng & thông tin)
- quản trị 
  - thông tin tài khoản user
  - upload đề
  - quản lý feedback
  - quản lý đề
- thống kê 
  - điểm trung bình
  - thời gian học
  - phổ điểm từng part
- lưu câu hỏi yêu thích và chú thích
- lưu và quản lý vocab
- tích hợp từ điển
- feedback câu hỏi
- chức năng giải đề

Database design: ![Database](database/TOEIC.png)
Detail System design: ...