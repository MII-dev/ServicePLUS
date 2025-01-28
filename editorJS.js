document.addEventListener("DOMContentLoaded", function () {
    // Функція для завантаження обраного шаблону
    function loadTemplate(templateName) {
        var templateNameElement = document.getElementById('template-name');
        var templateDisplayElement = document.getElementById('template-display');
        
        if (templateNameElement && templateDisplayElement) {
            templateNameElement.innerText = 'Вибраний шаблон: ' + templateName;
            templateDisplayElement.innerHTML = '<h2>' + templateName + '</h2><p>Це попередній перегляд обраного шаблону.</p>';
        } else {
            console.error('Елементи не знайдені:', {templateNameElement, templateDisplayElement});
        }
    }

    // Функція для приховування/показу списку шаблонів
    function toggleTemplateList() {
        var templateList = document.getElementById('template-list');
        if (templateList) {
            templateList.classList.toggle('hidden');
        } else {
            console.error('Елемент з id="template-list" не знайдений');
        }
    }

    // Функції для кнопок
    function selectTemplate() {
        console.log('Оберіть шаблон');
    }

    function editContent() {
        console.log('Редагувати контент');
    }

    function publishSite() {
        console.log('Опублікувати сайт');
    }

    // Підключення функцій до кнопок
    window.loadTemplate = loadTemplate;
    window.toggleTemplateList = toggleTemplateList;
    window.selectTemplate = selectTemplate;
    window.editContent = editContent;
    window.publishSite = publishSite;
});
