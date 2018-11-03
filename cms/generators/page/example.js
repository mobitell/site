({
   seo: {
      title: '',
      keywords: '',
      $title_label: 'Заголовок',
      $keywords_label: 'Ключевые слова',
      $description_label: 'Описание',
      description: ''
   },
   $list_types_hidden: true,
   list_types: {
      item: {
         $icon_label: 'Иконка',
         $icon_type: 'fa',
         icon: '',
         $header_label: 'Заголовок',
         header: '',
         $text_label: 'Текст',
         $text_type: 'textarea',
         text: '',
         $img_label: 'Изображение',
         $img_type: 'image',
         img: '',
      }
   },
   $content_types_hidden: true,
   content_types: {
      block: {
         $visible_label: 'Показывать блок?',
         visible: true,
         $header_label: 'Заголовок',
         header: '',
         $subheader_label: 'Подзаголовок',
         subheader: '',
         $text_label: 'Текст',
         $text_type: 'textarea',
         text: '',
         $imgBG_label: 'Фоновое изображение',
         $imgBG_type: 'image',
         imgBG: '',
         $list_templatitator: '@@list_types',
         $list_hidetitle: true,
         list: [],
      }
   },
   $content_templatitator: '@@content_types',
   $content_size: '12',
   $block_label: 'Список',
   content: []
})