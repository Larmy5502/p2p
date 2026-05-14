import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCheck, Clock3, MessageSquareMore, Paperclip, Search, SendHorizonal, Smile } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const placeholderCameraDark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABIZJREFUeAHVms9TGzcUx5/WjrFNTXAw2AkhLE7byaEzpYcy6alw6w167Kk59r9o+qf02FOav6D0lqHtxD0lkx+wCQRsbPDiGAwOK0Vf4fUYGxsR5GH9mWG83hUePem973uSlpEGmc/vz3tcLDIS8/LPJmKj1BeES4xyXFi5kOU9zr/6d/m8/2C9Hmay3z4QxH6VlzZdBYIcJuhh3ln5vVuTMw3I2PdtzvgjxmiWgoAyxFrIO0+c9kdW+42MLUfd8p4GpvOAkc1lnybsuaXORy2gAbPoEQUYxulBq0s1DYDbYOT7F6BmEDLQLR76xnenpgsJi/8V9M4DJvuI+PS/KwOgNnRVSvMJID4z9tzPuFYGNKRyoBCMHuKTIUkJDvcZPBjnC5bg3iINKJ7FFi1iVnD0/oLILD0fJsFnz6kotIkMDVH65mTX557nUWFzQ30aQSa4sEnpnL77BcVi8Z5torEYrb54TiaApIbJELem7qjO14+O5Ci/O7NN+tYkfZYYUW0319+SCYwYgI6lJjLkHR/T6xfP6EO9fma72uEB3f3ynmoLQ0vbBbosFzIgFo9TcmycQqHQqfvJsZT6zG+969p5cHhwoEZ+ys7KWZhWs9EaD7gubeeVccYNSKZSNDWd7fo8L4NzR2NEyzsluhYZooyctZHRZMfz1ESa1p1V1U4HLQMw4r66FAt5NZKt1OtHtF99T7psy5nCb7TP5HAiQTdS4ypGKm5ZS620DIjFhykiR636vkJbG2aCr7JX7rhX3i1JKY5K10ooYyque+7vaBlwLRJRn738u5VQOEzJG2PKcADDMUM6vv2hjjYJOTt63m1MRn0Q6FmpNK0dQJDDzZzXLzvc77JYZBBkYr/zGPX1tVWpOm+oJjsNF4SEoo1JjM4AAh2d3y0VaePNWvM+9P7m7Ts0ns6oNlAZUxidgZHRk6qksNWZiX2J9duYwqgBvt+fFez1+tGpNqYwaoCvMpDAdpB1Qe1gn0xi1AA/e6JUaA1WXN+2Z9T1nlsmkxidT9QxkEx0+N5XX9O+VCIUvdF4TLmOqQKuFaMGIPWjGoXSoCQYbrgN2Cvv0rpUJm5qMdPAeCJDAENCoUSxWCMTVyvGO+5j3AAfGKJbelwGrSD2q0K/JuonyNhAd02gNQMIRs87VlIIhTkJTvNEZR0FCUbnD2t6NZOWAZgBfyUFlfFXYP0CKzvdnYuwOtbR2JmAxqNAw3oW5XI/wJq6vFOUo1/Tao+damyrOPJaa3MLQWlqQWMCubGVk0EslmlA4fJA0GI89JgGFMHpT7WnmM7OoXi3aZCQB3+FtZUZlQc4id9owOCicT7g30jPzD2lIJ1M9qIx+rhsZmIm6j+eSGrQEa7s64L/rbmzVHXzbuL6ZEEeQC1RgBGc/VRw/nvifz+1NVZ1N3PD1yf/Z0z8IOckSoFCuJyzX4rOyh+td7u8ajArz4wjODezKQAIJCzp4nkn57Q/63k0My6PX60rftkDalO86Mse7aTs775n1vGSJeR5GlNHUv173UYwhzOxjCRVcv75+7z/+AgsE9/7JPGh4QAAAABJRU5ErkJggg==';
const placeholderCameraLight = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABDRJREFUeAHVmm1y2kYYx/+rN5DBBBxSt5mk47TT780JmpwgyQnqHKEnaHuT9gRJThD3BPHHfmnDjNOmJLWRiUEgIW33LxDGNthLvSTiN+ORrF3s53n2eVtWAhqEcfzAhvVISjyQkDvqUR2rIYDAvgWxnyB94bvu3lUfEJcNhtFoV0D8iLHQHx+JliXwk+c5vy6aMleBMJQ7lp0+U9b+FkVAKSLT+KHv+63zQ9b5B2EY7Qo7eVUY4YnAjrDdV8Ph6PHFoRk4QQo8Q4FRFt+ddampAnQbWh6rC1BTBDKJ7+fuNHUhYacvUXzhSd2yvamXZAow23yyTPM/YHxG0eh73mcuNIiS1+ukQIbKTOWSc0+wSAkpXmINkYl8aLHCYk2xHeuRlRYp3y9JqlobMYhGHRjKPlE8Qvvow8Jx27KwfbOmrgKGCBwYTJ2ttx0MhvGlc0I1/vWdJgxRd2CIv94HmfCea2N7qzZ3Tvuwi14Y4e/3x7h96wZMYESBf5Rgh0E/c42vlHU9x547r1yy8eebQ/wb9OC6Dm7VK7gujAGpOzkcRuh0QyRpeuY5nxFatXmFUEfdPt60g+y+VinDtk/jgTHSbFSUAfTtqq3AUben/vHxwvHtm5vKdTahAwO9fbg42O98XsfW5gZ00FKVFm8fnmT3zUYVvueeGaffV3wPulBR/o0kPWu7k/4QnQ99vH3XxY2Kr5WttBQIBzHiUYKqX8LtZg0mqFXLF541aj6i0SgL9J5SZt6c82gpEMdJdnVdW2d6tmJHx33VY41TakUpXt3wtHybc3qILsTZIoyl0RwG+h8q06Qz7sEgp/I7X2zBL7kwiQWDsBLnwtPd7m43MpfzS062ikyhdBGTGF0BZhYK36htKOFPCzwDn8WL+Z/JYHbsuhhdgW5vkF2ZUs/TrFfHc04GMIlRBfK0OK8Se5MEoBucuhhVIBf8JBxeGGOOJ4UOYvo+OVCtwmywMrgP8vZBI7cvg9EgZh/TUb1OpDLO76/fTaszW2gGN90ojwVTGF0BNmPsRhuTPiarqOqHwrNx++bLz0xuZjKMFzJa+a5qxpiJ8s1NZaNkXPAc4wrkUBFPs/W4DlouZE16dgbjqsmD33P1bKs1qzpxAfrzQbuDSrmEVRBG45jhypU10+0SG5rTndSqYQw1NDc0S32twvTIfiY1XE1zLJXFuCdYotgFYhirwwy5tl9u7TG57WFNsYTYt5JR+gJrioD1fO2/XrfG9/JnrBk8fuV1Wt+HUcFOJi9jYn3eTitxmlhPwJPy4hPwzDj/ZaqA74uWTPADCo6QeDp74H2mF/J95xc1oagrEfCMuFRyns8+XPiqwfjYtRiZSUDsp0n0ROtVA0J3Knv2PdUkPVUfb+FTwZc9aHXPvj9PeKK1y4hj+Z1E+jgdtxz8WdnrNsraLSGwxyLluuK3qz7wHyLSx112uG9oAAAAAElFTkSuQmCC';

type MessageContextType = 'Аренда' | 'Совладение';

interface MessageItem {
  id: number;
  senderName: string;
  isOnline?: boolean;
  productTitle?: string;
  contextType?: MessageContextType;
  previewText?: string;
  timestamp: string;
  chatId: number;
  price?: number;
  unreadCount?: number;
}

interface ChatMessage {
  id: number;
  chatId: number;
  text: string;
  timestamp: string;
  isMine: boolean;
  deliveryStatus?: 'pending' | 'sent' | 'read';
}

const messagesMock: MessageItem[] = [
  {
    id: 1,
    senderName: 'Иван Петров',
    isOnline: true,
    productTitle: 'Canon EOS R6',
    previewText: 'Здравствуйте! Актуален ли всё ещё Ваш фотоаппарат на выходных?',
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    chatId: 1,
    contextType: 'Аренда',
    price: 3500,
    unreadCount: 1,
  },
  {
    id: 2,
    senderName: 'Мария К.',
    isOnline: false,
    productTitle: 'Canon 5D Mark IV',
    previewText: 'Да, мы всё ещё готовы к сотрудничеству. Можете прислать свой паспорт?',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    chatId: 2,
    contextType: 'Совладение',
    price: 8000,
  },
  {
    id: 3,
    senderName: 'Алексей С.',
    isOnline: true,
    productTitle: 'Проектор EPSON EH-TW7000',
    previewText: 'Да, цена 5000 ₽ — актуальна. Жду подтверждения!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    chatId: 3,
    contextType: 'Аренда',
    price: 5000,
  },
  {
    id: 4,
    senderName: 'Ольга М.',
    isOnline: false,
    productTitle: 'Dell XPS 13',
    previewText: 'Здравствуйте! Интересует ноутбук на 2 дня. Актуален ли он сейчас?',
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    chatId: 4,
    contextType: 'Аренда',
    unreadCount: 2,
  },
  {
    id: 5,
    senderName: 'Дмитрий В.',
    isOnline: false,
    productTitle: 'Беспроводная зарядная станция Xiaomi 20000 мАч с быстрой зарядкой',
    previewText: 'Да, могу предоставить. Зарядник работает без подзарядки месяцами!',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    chatId: 5,
    contextType: 'Аренда',
  },
  {
    id: 6,
    senderName: 'Елена Г.',
    isOnline: true,
    productTitle: 'Робот-пылесос Xiaomi Mop 2 Pro+',
    previewText: 'Да, договорились! Подтверждаю встречу завтра утром в 10:00. Спасибо!',
    timestamp: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
    chatId: 6,
    contextType: 'Аренда',
  },
  {
    id: 7,
    senderName: 'Сергей П.',
    isOnline: false,
    productTitle: 'Xiaomi Mi Electric Scooter 4',
    previewText: 'Можно будет забрать после работы, это хорошо для меня!',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    chatId: 7,
    contextType: 'Совладение',
    unreadCount: 1,
  },
  {
    id: 8,
    senderName: 'Татьяна Л.',
    isOnline: true,
    productTitle: 'Велосипед GT Avalanche',
    previewText: 'Да, цена актуальна! Можете прислать свой адрес?',
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    chatId: 8,
    contextType: 'Аренда',
    price: 2000,
  },
  {
    id: 9,
    senderName: 'Николай К.',
    isOnline: false,
    productTitle: 'Xiaomi Mi Scooter',
    previewText: 'Могу забрать в 18:00, это удобно!',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    chatId: 9,
    contextType: 'Аренда',
  },
  {
    id: 10,
    senderName: 'Виктор Б.',
    isOnline: false,
    productTitle: 'HP Pavilion 15',
    previewText: 'Да, цена актуальна. Напишите, где Вам удобнее встретиться.',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    chatId: 10,
    contextType: 'Аренда',
    price: 2500,
  },
];

const chatMessagesMock: ChatMessage[] = [
  {
    id: 101,
    chatId: 1,
    text: 'Здравствуйте! Актуален ли всё ещё Ваш фотоаппарат на выходных?',
    timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    isMine: false,
  },
  {
    id: 102,
    chatId: 1,
    text: 'Здравствуйте. Да, актуален.',
    timestamp: new Date(Date.now() - 16 * 60 * 1000).toISOString(),
    isMine: true,
    deliveryStatus: 'read',
  },
  {
    id: 103,
    chatId: 1,
    text: 'Отлично, мне нужен на субботу и воскресенье.',
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    isMine: false,
  },
  {
    id: 104,
    chatId: 1,
    text: 'Да, это возможно. Стоимость указана за сутки.',
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    isMine: true,
    deliveryStatus: 'sent',
  },
  {
    id: 201,
    chatId: 2,
    text: 'Здравствуйте. Интересует совместное использование камеры.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    isMine: true,
    deliveryStatus: 'read',
  },
  {
    id: 202,
    chatId: 2,
    text: 'Да, мы всё ещё готовы к сотрудничеству. Можете прислать свой паспорт?',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    isMine: false,
  },
  {
    id: 301,
    chatId: 3,
    text: 'Здравствуйте! Проектор ещё свободен?',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    isMine: false,
  },
  {
    id: 302,
    chatId: 3,
    text: 'Да, цена 5000 ₽ — актуальна. Жду подтверждения!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isMine: true,
    deliveryStatus: 'read',
  },
  {
    id: 401,
    chatId: 4,
    text: 'Здравствуйте! Интересует ноутбук на 2 дня. Актуален ли он сейчас?',
    timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
    isMine: false,
  },
  {
    id: 402,
    chatId: 4,
    text: 'Да, актуален. На какие даты нужен?',
    timestamp: new Date(Date.now() - 68 * 60 * 1000).toISOString(),
    isMine: true,
    deliveryStatus: 'pending',
  },
  {
    id: 403,
    chatId: 4,
    text: 'На четверг и пятницу. Удобно забрать вечером.',
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    isMine: false,
  },
];

const formatChatListTime = (iso: string) => {
  const date = new Date(iso);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
  });
};

const formatMessageTime = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const isSameCalendarDay = (left: string, right: string) => {
  const leftDate = new Date(left);
  const rightDate = new Date(right);

  return (
    leftDate.getFullYear() === rightDate.getFullYear() &&
    leftDate.getMonth() === rightDate.getMonth() &&
    leftDate.getDate() === rightDate.getDate()
  );
};

const formatMessageGroupDate = (iso: string) => {
  const date = new Date(iso);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (isSameCalendarDay(iso, today.toISOString())) {
    return 'Сегодня';
  }

  if (isSameCalendarDay(iso, yesterday.toISOString())) {
    return 'Вчера';
  }

  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const formatPrice = (price?: number) => {
  if (!price) return null;
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
};

const getContextLine = (item: Pick<MessageItem, 'contextType' | 'productTitle'>) => {
  if (!item.contextType && !item.productTitle) return '';
  if (!item.contextType) return item.productTitle ?? '';
  if (!item.productTitle) return item.contextType;
  return `${item.contextType} • ${item.productTitle}`;
};

const ReadStatus = ({ status }: { status?: ChatMessage['deliveryStatus'] }) => {
  if (status === 'read') {
    return (
      <span className="inline-flex items-center justify-center text-blue-500 transition-colors dark:text-sky-400" aria-label="Прочитано">
        <CheckCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
    );
  }

  if (status === 'sent') {
    return (
      <span className="inline-flex items-center justify-center text-slate-400 transition-colors dark:text-slate-500" aria-label="Отправлено">
        <CheckCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center text-slate-400 transition-colors dark:text-slate-500" aria-label="Отправляется">
      <Clock3 className="h-3.5 w-3.5" strokeWidth={2.2} />
    </span>
  );
};

const DateSeparator = ({ date }: { date: string }) => (
  <div className="my-4 text-center">
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-500 dark:bg-white/5 dark:text-slate-400">
      {formatMessageGroupDate(date)}
    </span>
  </div>
);

const Messages = () => {
  const { theme } = useTheme();
  const [selectedChatId, setSelectedChatId] = useState<number | null>(messagesMock[0]?.chatId ?? null);
  const [draft, setDraft] = useState('');
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const placeholderCamera = theme === 'dark' ? placeholderCameraDark : placeholderCameraLight;

  const resizeMessageInput = (element: HTMLTextAreaElement) => {
    const maxHeight = 160;
    element.style.height = 'auto';

    const nextHeight = Math.min(element.scrollHeight, maxHeight);
    element.style.height = `${nextHeight}px`;
    element.style.overflowY = element.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  useEffect(() => {
    if (!messageInputRef.current) return;
    resizeMessageInput(messageInputRef.current);
  }, [draft]);

  const messages = messagesMock;

  const selectedChat = useMemo(
    () => messages.find((message) => message.chatId === selectedChatId) ?? null,
    [messages, selectedChatId]
  );

  const selectedMessages = useMemo(
    () => chatMessagesMock.filter((message) => message.chatId === selectedChatId),
    [selectedChatId]
  );

  if (messages.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex min-h-[70vh] items-center justify-center rounded-3xl border border-slate-200 bg-white/90 px-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
              <MessageSquareMore className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Пока нет диалогов</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Когда вам напишут по аренде или совладению, переписка появится здесь.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-6 pb-6">
      <style>{`
        .messages-scroll {
          scrollbar-width: thin;
        }

        html:not(.dark) .messages-scroll {
          scrollbar-color: rgba(100, 116, 139, 0.38) rgba(148, 163, 184, 0.12);
        }

        html.dark .messages-scroll {
          scrollbar-color: rgba(148, 163, 184, 0.34) rgba(255, 255, 255, 0.03);
        }

        .messages-scroll::-webkit-scrollbar {
          width: 8px;
        }

        html:not(.dark) .messages-scroll::-webkit-scrollbar-track {
          background: rgba(148, 163, 184, 0.12);
          border-radius: 9999px;
        }

        html.dark .messages-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 9999px;
        }

        html:not(.dark) .messages-scroll::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.34);
          border-radius: 9999px;
          border: 2px solid rgba(241, 245, 249, 0.85);
        }

        html.dark .messages-scroll::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.28);
          border-radius: 9999px;
          border: 2px solid rgba(15, 23, 42, 0.18);
        }

        html:not(.dark) .messages-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.48);
        }

        html.dark .messages-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.44);
        }
      `}</style>

      <div className="grid h-[calc(100vh-10rem)] min-h-[680px] grid-cols-1 gap-4 overflow-hidden lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/70">
          <div className="border-b border-slate-200 px-4 py-4 dark:border-white/10">
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Сообщения</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Диалоги по аренде и совладению</p>
          </div>

          <div className="border-b border-slate-200 px-3 py-3 dark:border-white/10">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
              <Search className="h-4 w-4" />
              <span className="text-sm">Поиск по диалогам</span>
            </div>
          </div>

          <div className="messages-scroll min-h-0 flex-1 overflow-y-auto p-3">
            <div className="space-y-2">
              {messages.map((message) => {
                const isActive = selectedChatId === message.chatId;
                const contextLine = getContextLine(message);

                return (
                  <button
                    key={message.id}
                    type="button"
                    onClick={() => setSelectedChatId(message.chatId)}
                    className={`w-full rounded-2xl border p-3 text-left transition-all ${
                      isActive
                        ? 'border-blue-200 bg-blue-50 shadow-sm dark:border-blue-500/30 dark:bg-blue-600/10 dark:shadow-lg dark:shadow-blue-950/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50 dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <img
                          src={placeholderCamera}
                          alt={message.senderName}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <span className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                            {message.senderName}
                          </span>
                          <span className="flex-shrink-0 pt-0.5 text-[11px] text-slate-400 dark:text-slate-500/90">
                            {formatChatListTime(message.timestamp)}
                          </span>
                        </div>

                        {contextLine ? (
                          <div className="mt-1 flex min-w-0 items-center gap-2 text-xs leading-5">
                            <span className="min-w-0 truncate text-slate-500 dark:text-slate-400/95">{contextLine}</span>
                            {message.price ? (
                              <span className="flex-shrink-0 font-semibold text-slate-700/90 dark:text-slate-200/95">
                                {formatPrice(message.price)}
                              </span>
                            ) : null}
                          </div>
                        ) : null}

                        <div className="mt-2 flex items-center justify-between gap-3">
                          <span className="line-clamp-1 min-w-0 flex-1 text-sm leading-5 text-slate-600 dark:text-slate-300/95">
                            {message.previewText || 'Нет сообщений'}
                          </span>

                          {message.unreadCount ? (
                            <span className="inline-flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 px-1.5 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/16 dark:text-blue-300">
                              {message.unreadCount > 9 ? '9+' : message.unreadCount}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/70">
          {!selectedChat ? (
            <div className="flex flex-1 items-center justify-center p-6">
              <div className="max-w-md text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <MessageSquareMore className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Выберите диалог</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Слева отображаются ваши активные переписки. Откройте нужный чат, чтобы продолжить общение.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="shrink-0 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/95">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <img
                      src={placeholderCamera}
                      alt={selectedChat.senderName}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="truncate text-base font-semibold text-slate-900 dark:text-white">
                        {selectedChat.senderName}
                      </div>
                      <div className="inline-flex flex-shrink-0 items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            selectedChat.isOnline ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-500'
                          }`}
                        />
                        <span>{selectedChat.isOnline ? 'онлайн' : 'оффлайн'}</span>
                      </div>
                    </div>
                    <div className="mt-1.5 flex min-w-0 items-center gap-2 text-sm leading-5">
                      <span className="min-w-0 truncate text-slate-500 dark:text-slate-400">
                        {getContextLine(selectedChat)}
                      </span>
                      {selectedChat.price ? (
                        <span className="flex-shrink-0 font-semibold text-slate-700/95 dark:text-slate-200/95">
                          {formatPrice(selectedChat.price)}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="messages-scroll flex-1 min-h-0 overflow-y-auto bg-slate-50 px-5 py-5 dark:bg-slate-950/35">
                {selectedMessages.length === 0 ? (
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-sm text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                        <MessageSquareMore className="h-7 w-7" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">Здесь пока пусто</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Отправьте первое сообщение, чтобы начать диалог.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-full flex-col justify-end">
                    <div className="space-y-3">
                    {selectedMessages.map((message, index) => {
                      const previousMessage = selectedMessages[index - 1];
                      const shouldShowDateSeparator =
                        index === 0 || !isSameCalendarDay(message.timestamp, previousMessage.timestamp);

                      return (
                        <div key={message.id}>
                          {shouldShowDateSeparator ? <DateSeparator date={message.timestamp} /> : null}

                          <div className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
                            <div
                              className={`flex max-w-[88%] items-end gap-2 ${
                                message.isMine ? 'justify-end' : 'justify-start'
                              }`}
                            >
                              <div
                                className={`max-w-full rounded-2xl border px-4 py-3 shadow-sm ${
                                  message.isMine
                                    ? 'rounded-br-md border-blue-200 bg-blue-100 text-slate-900 dark:border-blue-500/20 dark:bg-blue-500/15 dark:text-white'
                                    : 'rounded-bl-md border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-100'
                                }`}
                              >
                                <p className="whitespace-pre-wrap text-sm leading-6">{message.text}</p>
                              </div>

                              <span
                                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap pb-1 text-[11px] leading-none ${
                                  message.isMine ? 'text-slate-500 dark:text-slate-400/80' : 'text-slate-500/90 dark:text-slate-500/80'
                                }`}
                              >
                                <span>{formatMessageTime(message.timestamp)}</span>
                                {message.isMine ? <ReadStatus status={message.deliveryStatus} /> : null}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                )}
              </div>

              <div className="shrink-0 border-t border-slate-200 bg-white/95 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/95">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                  <div className="flex items-end gap-1.5">
                    <button
                      type="button"
                      aria-label="Прикрепить файл"
                      className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center self-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-500 dark:hover:bg-white/6 dark:hover:text-slate-300 dark:focus:ring-white/10"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      aria-label="Добавить смайл"
                      className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center self-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-500 dark:hover:bg-white/6 dark:hover:text-slate-300 dark:focus:ring-white/10"
                    >
                      <Smile className="h-4 w-4" />
                    </button>

                    <textarea
                      ref={messageInputRef}
                      value={draft}
                      onChange={(event) => {
                        setDraft(event.target.value);
                        resizeMessageInput(event.target);
                      }}
                      placeholder="Напишите сообщение..."
                      rows={1}
                      className="min-h-[44px] max-h-40 w-full flex-1 resize-none overflow-y-hidden bg-transparent px-2.5 py-[10px] text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      aria-label="Отправить сообщение"
                      className="inline-flex h-10 min-w-10 flex-shrink-0 items-center justify-center self-center rounded-xl bg-blue-600 px-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-white/8 dark:disabled:text-slate-500"
                      disabled={!draft.trim()}
                    >
                      <SendHorizonal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Messages;
