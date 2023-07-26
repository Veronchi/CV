import { FC } from 'react';
import { ContactItem } from '..';
import { contacts } from '@/utils/contacts';
import './contacts.scss';

export const Contacts: FC = () => {
  return (
    <div className="contacts">
      {contacts.map((item) => {
        return <ContactItem key={item.id} item={item} />;
      })}
    </div>
  );
};
