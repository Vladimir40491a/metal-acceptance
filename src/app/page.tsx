import Link from 'next/link';
import { Table, Column } from '@/app/components/table';
import { Map } from '@/app/components/map';
import { Flex } from '@/app/components/flex';
import { getAmountWithCurrency, formatPhoneNumber } from '@/app/utils';
import price from '@/database/price.json';
import contactInfoData from '@/database/contact-info.json';
import { ContactInfo, ContactInfoDto, MetalDto, MetalRow } from '@/app/types';
import { LocationIcon } from '@/app/components/icons/location';
import { OfficeHoursIcon } from '@/app/components/icons/office-hours';
import { PhoneIcon } from '@/app/components/icons/phone';
import { Logo } from '@/app/components/icons/logo';

/** Колонки таблицы металлов. */
const columns: Column[] = [
  {
    label: 'Вид металла',
    name: 'type',
  },
  {
    label: 'Наличные (цена за 1 кг.)',
    name: 'cashPayment',
  },
]

export default async function Home() {
  const contactInfoDto = contactInfoData as ContactInfoDto;

  const contactInfo: ContactInfo = {
    address: contactInfoDto.address,
    coordinates: contactInfoDto.coordinates,
    phone: formatPhoneNumber(contactInfoDto.phone),
    rawPhone: contactInfoDto.phone,
    opening: {
      days: `${contactInfoDto.opening.days.start}-${contactInfoDto.opening.days.end}`,
      hours: contactInfoDto.opening.hours.dayAndNight ? 'круглосуточно' : `c ${contactInfoDto.opening.hours.start} до ${contactInfoDto.opening.hours.end}`
    }
  }

  const opening = `${contactInfo.opening.days} ${contactInfo.opening.hours}`;

  const items: MetalRow[] = (price as unknown as MetalDto[] ?? []).map(({ cashPayment, type }) => ({
    cashPayment: Array.isArray(cashPayment) ? `${getAmountWithCurrency(cashPayment[0])} - ${getAmountWithCurrency(cashPayment[1])}` : getAmountWithCurrency(cashPayment),
    type,
  }))

  return (
    <div className="max-w-4xl m-auto">
      <header className="bg-bgPrimary flex flex-col font-medium gap-y-2 px-8 py-8 relative rounded-sm text-textSecondary md:flex-row md:items-center md:gap-x-5 lg:gap-x-8">
        <div className="flex-none">
          <Logo />
        </div>
        <Flex className="gap-x-2.5">
          <div className="flex-none">
            <LocationIcon />
          </div>
          <Link href="#map" title="Посмотреть на карте">{contactInfo.address}</Link>
        </Flex>
        <Flex className="flex-none gap-x-2.5">
          <OfficeHoursIcon />
          <span>{opening}</span>
        </Flex>
        <Flex className="flex-none gap-x-2.5 grow font-semibold justify-start md:justify-end md:text-right text-lg">
          <PhoneIcon size="M" />
          <Link className="" href={`tel:${contactInfo.rawPhone}`} title="Позвонить">{contactInfo.phone}</Link>
        </Flex>
        <div className="absolute bg-bgSecondary -bottom-1/4 md:-bottom-1/2 font-light left-1/2 py-2 px-4 rounded-sm text-center text-zinc-900 transform -translate-x-1/2 -translate-y-1/2 w-11/12" >
          <h4>Доступна услуга вывоза металлолома</h4>
        </div>
      </header>
      <main className="flex flex-col gap-y-16 px-3 md:px-8 py-16">
        <div>
          <h3 className="font-semibold mb-2 text-center text-lg">Цены приема лома металлов</h3>
          <Table<MetalRow> columns={columns} data={items} />
        </div>
        <div id="map">
          <Map coordinates={contactInfo.coordinates} />
        </div>
      </main>
      <footer className="bg-bgPrimary flex flex-col md:flex-row gap-y-1 justify-between px-8 py-3 rounded-sm text-textSecondary text-xs md:text-sm">
        <Logo size="M" />
        <Flex className="gap-x-1">
          <LocationIcon color="var(--text-tertiary)" size="XS" />
          {contactInfo.address}
        </Flex>
        <Flex className="gap-x-1">
          <OfficeHoursIcon color="var(--text-tertiary)" size="XS" />
          <span>{opening}</span>
        </Flex>
        <Flex className="gap-x-1">
          <PhoneIcon color="var(--text-tertiary)" size="XS" />
          <Link href={`tel:${contactInfo.rawPhone}`} title="Позвонить">{contactInfo.phone}</Link>
        </Flex>
      </footer>
    </div>
  );
}
