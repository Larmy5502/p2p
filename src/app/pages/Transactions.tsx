import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Check,
  Clock3,
  Lock,
  MessageSquare,
  PackageCheck,
  PackageOpen,
  RotateCcw,
  Star,
  UserRound,
  X,
} from "lucide-react";

type UserRole = "owner" | "renter";
type TransactionStatus = "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "RETURNING" | "COMPLETED";
type TransactionFilter = "all" | "pending" | "approved" | "active" | "returning" | "completed";

type RentalTransaction = {
  id: string;
  item: {
    id: string;
    title: string;
  };
  owner: string;
  renter: string;
  currentUserRole: UserRole;
  rentedAt: string;
  returnedAt?: string;
  status: TransactionStatus;
  amount: string;
  createdAt: string;
  summary: string;
  history: string[];
  reviewState?: "available" | "left";
};

const TRANSACTIONS: RentalTransaction[] = [
  {
    id: "rent-1024",
    item: { id: "1", title: "Sony PlayStation 5 с 2 джойстиками" },
    owner: "Евгений",
    renter: "Алексей Иванов",
    currentUserRole: "owner",
    rentedAt: "30 апреля 2026, 21:49",
    status: "PENDING",
    amount: "2 400 ₽",
    createdAt: "28 апреля 2026, 11:20",
    summary: "Алексей отправил запрос на аренду на два дня. Нужно подтвердить или отклонить заявку.",
    history: ["Запрос на аренду создан", "Ожидается решение владельца"],
  },
  {
    id: "rent-1023",
    item: { id: "3", title: "Перфоратор Makita HR2470" },
    owner: "Дмитрий В.",
    renter: "Евгений",
    currentUserRole: "renter",
    rentedAt: "29 апреля 2026, 18:30",
    status: "APPROVED",
    amount: "800 ₽",
    createdAt: "27 апреля 2026, 18:05",
    summary: "Владелец подтвердил аренду. После передачи вещи подтвердите получение.",
    history: ["Запрос на аренду создан", "Владелец подтвердил аренду", "Ожидается подтверждение получения"],
  },
  {
    id: "rent-1022",
    item: { id: "7", title: "Проектор XGIMI Halo+" },
    owner: "Евгений",
    renter: "Ольга М.",
    currentUserRole: "owner",
    rentedAt: "26 апреля 2026, 14:15",
    status: "ACTIVE",
    amount: "1 500 ₽",
    createdAt: "25 апреля 2026, 09:40",
    summary: "Аренда активна. Предмет сейчас у арендатора, возврат ожидается по договорённости.",
    history: ["Запрос подтверждён", "Арендатор подтвердил получение", "Аренда активна"],
  },
  {
    id: "rent-1021",
    item: { id: "4", title: "Сапборд Gladiator Pro 10.6" },
    owner: "Мария К.",
    renter: "Евгений",
    currentUserRole: "renter",
    rentedAt: "24 апреля 2026, 11:00",
    status: "RETURNING",
    amount: "2 500 ₽",
    createdAt: "23 апреля 2026, 13:10",
    summary: "Возврат инициирован. Владелец должен подтвердить, что получил предмет обратно.",
    history: ["Аренда активна", "Арендатор инициировал возврат", "Ожидается подтверждение владельца"],
  },
  {
    id: "rent-1020",
    item: { id: "5", title: "DJI Mavic Air 2" },
    owner: "Сергей П.",
    renter: "Евгений",
    currentUserRole: "renter",
    rentedAt: "19 апреля 2026, 16:35",
    returnedAt: "20 апреля 2026",
    status: "COMPLETED",
    amount: "3 600 ₽",
    createdAt: "19 апреля 2026, 16:35",
    summary: "Аренда завершена. Можно поставить оценку и оставить отзыв по этой сделке.",
    history: ["Запрос подтверждён", "Получение подтверждено", "Возврат подтверждён", "Сделка завершена"],
    reviewState: "available",
  },
  {
    id: "rent-1019",
    item: { id: "6", title: "GoPro Hero 9 Black" },
    owner: "Елена Г.",
    renter: "Евгений",
    currentUserRole: "renter",
    rentedAt: "18 апреля 2026, 12:15",
    status: "REJECTED",
    amount: "1 000 ₽",
    createdAt: "18 апреля 2026, 12:15",
    summary: "Запрос отклонён: вещь уже занята на выбранные даты.",
    history: ["Запрос на аренду создан", "Владелец отклонил заявку"],
  },
  {
    id: "rent-1018",
    item: { id: "2", title: "Электросамокат Ninebot E2 Pro" },
    owner: "Евгений",
    renter: "Николай К.",
    currentUserRole: "owner",
    rentedAt: "10 апреля 2026, 20:05",
    returnedAt: "12 апреля 2026",
    status: "COMPLETED",
    amount: "2 000 ₽",
    createdAt: "10 апреля 2026, 20:05",
    summary: "Аренда завершена. Отзыв по сделке уже опубликован.",
    history: ["Запрос подтверждён", "Получение подтверждено", "Возврат подтверждён", "Отзыв опубликован"],
    reviewState: "left",
  },
];

const FILTERS: { id: TransactionFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "pending", label: "Ожидают" },
  { id: "approved", label: "Подтверждены" },
  { id: "active", label: "Активные" },
  { id: "returning", label: "Возврат" },
  { id: "completed", label: "Завершённые" },
];

const STATUS_META: Record<TransactionStatus, { label: string; description: string; className: string; dotClassName: string }> = {
  PENDING: {
    label: "Ожидает",
    description: "Запрос создан, владелец принимает решение",
    className: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
    dotClassName: "bg-amber-500",
  },
  APPROVED: {
    label: "Подтверждена",
    description: "Владелец подтвердил, арендатор должен отметить получение",
    className: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
    dotClassName: "bg-blue-500",
  },
  REJECTED: {
    label: "Отклонена",
    description: "Запрос на аренду отклонён",
    className: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20",
    dotClassName: "bg-rose-500",
  },
  ACTIVE: {
    label: "Активна",
    description: "Предмет у арендатора",
    className: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    dotClassName: "bg-emerald-500",
  },
  RETURNING: {
    label: "Возврат",
    description: "Арендатор инициировал возврат, владелец подтверждает получение",
    className: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20",
    dotClassName: "bg-violet-500",
  },
  COMPLETED: {
    label: "Завершена",
    description: "Аренда завершена",
    className: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10",
    dotClassName: "bg-slate-400",
  },
};

function getFilterCount(filter: TransactionFilter) {
  return TRANSACTIONS.filter((transaction) => matchesFilter(transaction, filter)).length;
}

function matchesFilter(transaction: RentalTransaction, filter: TransactionFilter) {
  if (filter === "all") return true;
  if (filter === "pending") return transaction.status === "PENDING";
  if (filter === "approved") return transaction.status === "APPROVED";
  if (filter === "active") return transaction.status === "ACTIVE";
  if (filter === "returning") return transaction.status === "RETURNING";
  return transaction.status === "COMPLETED";
}

function getOtherSide(transaction: RentalTransaction) {
  return transaction.currentUserRole === "owner" ? transaction.renter : transaction.owner;
}

function getCounterpartyLabel(transaction: RentalTransaction) {
  return transaction.currentUserRole === "owner"
    ? `Арендатор: ${transaction.renter}`
    : `Владелец: ${transaction.owner}`;
}

function getRoleLabel(role: UserRole) {
  return role === "owner" ? "Вы владелец" : "Вы арендатор";
}

function getAction(transaction: RentalTransaction) {
  if (transaction.status === "PENDING" && transaction.currentUserRole === "owner") {
    return { kind: "decision" as const, primary: "Подтвердить", secondary: "Отклонить" };
  }

  if (transaction.status === "APPROVED" && transaction.currentUserRole === "renter") {
    return { kind: "single" as const, label: "Подтвердить получение", icon: Check };
  }

  if (transaction.status === "ACTIVE" && transaction.currentUserRole === "renter") {
    return { kind: "single" as const, label: "Вернуть предмет", icon: RotateCcw };
  }

  if (transaction.status === "RETURNING" && transaction.currentUserRole === "owner") {
    return { kind: "single" as const, label: "Подтвердить возврат", icon: PackageCheck };
  }

  return null;
}

export function Transactions() {
  const [filter, setFilter] = useState<TransactionFilter>("all");
  const [selectedId, setSelectedId] = useState(TRANSACTIONS[0]?.id ?? "");

  const filteredTransactions = useMemo(
    () => TRANSACTIONS.filter((transaction) => matchesFilter(transaction, filter)),
    [filter]
  );

  const selectedTransaction = useMemo(
    () => filteredTransactions.find((transaction) => transaction.id === selectedId) ?? filteredTransactions[0] ?? null,
    [filteredTransactions, selectedId]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Транзакции</h1>
      </div>

      <div className="mb-6 flex gap-6 overflow-x-auto border-b border-slate-200 dark:border-slate-800">
        {FILTERS.map((item) => {
          const count = getFilterCount(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`whitespace-nowrap border-b-2 px-0.5 pb-3 text-lg font-bold transition-colors ${
                filter === item.id
                  ? "border-slate-900 text-slate-900 dark:border-white dark:text-white"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {item.label} <span className="text-base font-semibold text-slate-400 dark:text-slate-500">{count}</span>
            </button>
          );
        })}
      </div>

      {filteredTransactions.length === 0 ? (
        <EmptyTransactions />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="space-y-3">
            {filteredTransactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                isSelected={selectedTransaction?.id === transaction.id}
                onSelect={() => setSelectedId(transaction.id)}
              />
            ))}
          </div>

          {selectedTransaction ? <TransactionDetails transaction={selectedTransaction} /> : null}
        </div>
      )}
    </section>
  );
}

function StatusBadge({ status }: { status: TransactionStatus }) {
  const meta = STATUS_META[status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${meta.className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClassName}`} />
      {meta.label}
    </span>
  );
}

function TransactionRow({
  transaction,
  isSelected,
  onSelect,
}: {
  transaction: RentalTransaction;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const action = getAction(transaction);

  return (
    <article
      className={`rounded-2xl border bg-white p-4 shadow-sm transition-all dark:bg-slate-900 ${
        isSelected
          ? "border-blue-200 ring-2 ring-blue-600/10 dark:border-blue-500/30 dark:ring-blue-500/10"
          : "border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
      }`}
    >
      <button type="button" onClick={onSelect} className="w-full text-left">
        <div className="flex gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex h-full w-full items-center justify-center">
              <Camera className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="line-clamp-1 text-base font-bold text-slate-900 dark:text-white">
                  {transaction.item.title}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{getCounterpartyLabel(transaction)}</span>
                </div>
              </div>

              <StatusBadge status={transaction.status} />
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {transaction.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-lg font-bold text-slate-900 dark:text-white">{transaction.amount}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{transaction.rentedAt}</span>
              </div>
              {action ? (
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {action.kind === "decision" ? "Требуется решение" : action.label}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

function TransactionDetails({ transaction }: { transaction: RentalTransaction }) {
  const meta = STATUS_META[transaction.status];
  const otherSide = getOtherSide(transaction);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <StatusBadge status={transaction.status} />
            </div>
            <h2 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">Детали аренды</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{meta.description}</p>
          </div>
          <div className="rounded-full bg-slate-100 p-2 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <PackageCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50">
          <div className="flex gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-slate-300 dark:bg-slate-900 dark:text-slate-600">
              <Camera className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <Link to={`/item/${transaction.item.id}`} className="line-clamp-2 font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                {transaction.item.title}
              </Link>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{transaction.amount}</p>
            </div>
          </div>
        </div>

        <dl className="mt-5 space-y-3 text-sm">
          <DetailLine label="Тип сделки" value="Аренда" />
          <DetailLine label="Ваша роль" value={getRoleLabel(transaction.currentUserRole)} />
          <DetailLine label="Вторая сторона" value={otherSide} />
          <DetailLine label="Создана" value={transaction.createdAt} />
          <DetailLine label="Дата аренды" value={transaction.rentedAt} />
          {transaction.returnedAt ? <DetailLine label="Дата возврата" value={transaction.returnedAt} /> : null}
          <DetailLine label="Сумма" value={transaction.amount} />
        </dl>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">Этапы сделки</h3>
          <div className="space-y-3">
            {transaction.history.map((item, index) => (
              <div key={item} className="flex gap-3 text-sm">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  {index === transaction.history.length - 1 ? <Clock3 className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                </div>
                <span className="text-slate-600 dark:text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <ActionBlock transaction={transaction} />
        <ReviewBlock transaction={transaction} />
      </div>
    </aside>
  );
}

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="text-right font-medium text-slate-900 dark:text-slate-100">{value}</dd>
    </div>
  );
}

function ActionBlock({ transaction }: { transaction: RentalTransaction }) {
  const action = getAction(transaction);

  return (
    <div className="mt-6 space-y-2">
      {action?.kind === "decision" ? (
        <div className="grid grid-cols-2 gap-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            <Check className="h-4 w-4" />
            {action.primary}
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            <X className="h-4 w-4" />
            {action.secondary}
          </button>
        </div>
      ) : null}

      {action?.kind === "single" ? (
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          <action.icon className="h-4 w-4" />
          {action.label}
        </button>
      ) : null}

      {!action ? (
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500 dark:bg-slate-950/50 dark:text-slate-400">
          Активных действий по статусу сейчас нет.
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-2">
        <Link
          to={`/item/${transaction.item.id}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <PackageOpen className="h-4 w-4" />
          Товар
        </Link>
        <Link
          to="/messages"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <MessageSquare className="h-4 w-4" />
          Написать
        </Link>
      </div>
    </div>
  );
}

function ReviewBlock({ transaction }: { transaction: RentalTransaction }) {
  const isCompleted = transaction.status === "COMPLETED";

  if (isCompleted && transaction.reviewState === "left") {
    return (
      <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white p-2 text-emerald-600 dark:bg-slate-900 dark:text-emerald-300">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Оценка и отзыв</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Отзыв по этой завершённой аренде уже опубликован и учтён в рейтинге участника.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mt-6 rounded-2xl border p-4 ${isCompleted ? "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50" : "border-slate-200 bg-slate-50/70 opacity-80 dark:border-slate-800 dark:bg-slate-950/40"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Оценка и отзыв</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {isCompleted
              ? "Оценка относится к конкретной завершённой аренде."
              : "Оценка станет доступна после завершения аренды."}
          </p>
        </div>
        {!isCompleted ? <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" /> : null}
      </div>

      <div className={`mt-3 flex gap-1 ${isCompleted ? "text-amber-400" : "text-slate-300 dark:text-slate-700"}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`h-5 w-5 ${isCompleted ? "fill-current" : ""}`} />
        ))}
      </div>

      <textarea
        rows={3}
        disabled={!isCompleted}
        placeholder="Коротко опишите, как прошла аренда"
        className="mt-3 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:disabled:bg-slate-900/60"
      />

      <button
        disabled={!isCompleted}
        className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500"
      >
        Опубликовать отзыв
      </button>
    </div>
  );
}

function EmptyTransactions() {
  return (
    <div className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-900/50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm dark:bg-slate-900 dark:text-slate-500">
        <UserRound className="h-8 w-8" />
      </div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Пока нет аренд</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        Когда вы отправите запрос на аренду или получите заявку на свою вещь, сделка появится здесь.
      </p>
      <Link to="/catalog" className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
        Перейти в каталог
      </Link>
    </div>
  );
}
