// تابعی برای بررسی اگر امروز چهارشنبه است
function isWednesday() {
    const today = new Date();
    return today.getDay() === 3; // چهارشنبه روز 3 هفته است
  }
  
  // تابعی برای درخواست دسترسی و نمایش نوتیفیکیشن
  function showNotification() {
    // بررسی اگر دسترسی نوتیفیکیشن داده شده است
    if (Notification.permission === 'granted') {
      // نمایش نوتیفیکیشن اگر امروز چهارشنبه است
      if (isWednesday()) {
        const notification = new Notification('یادآوری بازدهی', {
          body: 'امروز روز بازدهی و اپدیته!',
          // می‌توانید تنظیمات بیشتری اضافه کنید
        });
      }
    } else if (Notification.permission !== 'denied') {
      // درخواست دسترسی نوتیفیکیشن
      Notification.requestPermission().then(permission => {
        // اگر دسترسی داده شد، نوتیفیکیشن را نمایش بده
        if (permission === 'granted' && isWednesday()) {
          const notification = new Notification('یادآوری بازدهی', {
            body: 'امروز، روز بازدهی و اپدیته!',
            // می‌توانید تنظیمات بیشتری اضافه کنید
          });
        }
      });
    }
  }
  
  // بررسی دسترسی و نمایش نوتیفیکیشن هنگام بارگذاری صفحه
  document.addEventListener('DOMContentLoaded', showNotification);
   