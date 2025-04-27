// Alert Management Module
export function triggerAlert() {
    const alert = document.querySelector('.alert-animation');
    alert.classList.add('active');
    
    setTimeout(() => {
        alert.classList.remove('active');
    }, 500);
}

export function updateActivityList() {
    // Tombstone: Previous activity list update logic moved here
    const activityList = document.querySelector('.activity-list');
    const activities = [
        {
            icon: 'danger',
            iconClass: 'fas fa-radiation',
            title: 'تنبيه أمني عاجل',
            desc: 'تم رصد حملة تضليل إعلامي منظمة عبر منصات متعددة',
            time: 'الآن'
        },
        {
            icon: 'warning',
            iconClass: 'fas fa-share-alt',
            title: 'منشور يحقق انتشار واسع',
            desc: 'منشور على تويتر يحقق معدل انتشار غير طبيعي خلال الساعة الماضية',
            time: 'الآن'
        },
        {
            icon: 'success',
            iconClass: 'fas fa-robot',
            title: 'اكتشاف الذكاء الاصطناعي',
            desc: 'تم تحديد 23 حساباً آلياً جديداً ينشر محتوى مشبوه',
            time: 'الآن'
        }
    ];
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const activityElement = document.createElement('div');
    activityElement.className = 'activity-item';
    activityElement.innerHTML = `
        <div class="activity-icon ${randomActivity.icon}">
            <i class="${randomActivity.iconClass}"></i>
        </div>
        <div class="activity-content">
            <div class="activity-title">${randomActivity.title}</div>
            <div class="activity-desc">${randomActivity.desc}</div>
        </div>
        <div class="activity-time">${randomActivity.time}</div>
    `;
    
    // Insert at the beginning
    activityList.insertBefore(activityElement, activityList.firstChild);
    
    // Remove the last item if more than 3
    if (activityList.children.length > 3) {
        activityList.removeChild(activityList.lastChild);
    }
}
