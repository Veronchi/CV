import { Contact } from '@/utils/contacts';
import { FC } from 'react';
import './contacts.scss';

type ContactItemProps = {
  item: Contact;
};

export const ContactItem: FC<ContactItemProps> = ({ item }) => {
  const { link, icon, text, classOption } = item;

  if (!link)
    return (
      <span className={`contacts__item ${classOption || ''}`}>
        {icon}
        <span>{text}</span>
      </span>
    );

  return (
    <a className={`contacts__item ${classOption || ''}`} href={link} target="_blank">
      {icon}
      <span>{text}</span>
    </a>
  );
};
