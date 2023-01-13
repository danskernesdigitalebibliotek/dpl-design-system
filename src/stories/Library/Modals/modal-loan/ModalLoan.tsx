import { useMemo, useState } from "react";
import { Button } from "../../Buttons/button/Button";
import { Checkbox } from "../../Forms/checkbox/Checkbox";
import { Counter } from "../../counter/Counter";
import { LinkFilters } from "../../link-filters/LinkFilters";
import {
  ListMaterials,
  ListMaterialsProps,
} from "../../Lists/list-materials/ListMaterials";
import { WarningStatus } from "../../warning-status/WarningStatus";
import Modal from "../Modal";

type LoanMaterials = Array<{
  materialType?: string;
  list: Array<ListMaterialsProps>;
}>;

const listExpired: LoanMaterials = [
  {
    list: [
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: false,
        canBeRenewed: true,
        statusDelivery: {
          label: "AFLEVERES 20.11.21",
          status: "danger",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: false,
        canBeRenewed: true,
        statusDelivery: {
          label: "AFLEVERES 20.11.21",
          status: "danger",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: false,
        canBeRenewed: true,
        statusDelivery: {
          label: "AFLEVERES 20.11.21",
          status: "danger",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: false,
        canBeRenewed: false,
        statusDelivery: {
          label: "AFLEVERES 20.11.21",
          status: "danger",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
    ],
  },
];

const listExpiresSoon: LoanMaterials = [
  {
    materialType: "lån",
    list: [
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: false,
        canBeRenewed: true,
        statusDelivery: {
          label: "AFLEVERES 20.11.21",
          status: "warning",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
    ],
  },
  {
    materialType: "digitale lån",
    list: [
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: true,
        canBeRenewed: true,
        statusDelivery: {
          label: "UDLØBER 20.11.21",
          status: "warning",
        },
        statusMaterialType: {
          label: "bog",
          status: "outline",
        },
      },
    ],
  },
];

export type ModalLoanProps = {
  title: string;
  description: string;
  showModal: boolean;
  showExpired: boolean;
  buttonsUpTop: boolean;
};

export const ModalLoan: React.FC<ModalLoanProps> = ({
  title,
  description,
  showExpired,
  showModal,
  buttonsUpTop,
}) => {
  const [isAllChecked, setChecked] = useState(false);
  const isExpired = showExpired;
  const loanList = isExpired ? listExpired : listExpiresSoon;

  const countRenewable = useMemo(() => {
    let total = 0;
    loanList.forEach((loans) =>
      loans.list.forEach((material) => {
        if (material.canBeRenewed) total += 1;
      })
    );
    return total;
  }, [loanList]);

  const handleToggleAll = () => {
    setChecked(!isAllChecked);
  };

  return (
    <Modal shownModal={showModal} classNames="modal-loan">
      <div className="modal-loan__container">
        <div className="modal-loan__header">
          {isExpired && (
            <div className="mr-32">
              <Counter
                label="dage"
                percentage={100}
                value={-2}
                status="danger"
                isReady={false}
                animate={false}
              />
            </div>
          )}
          <div>
            <h2 className="modal-loan__title text-header-h2">{title}</h2>
            <p className="text-body-medium-regular color-secondary-gray mt-4">
              {description}
            </p>
          </div>
        </div>
        {isExpired && (
          <div className="modal-loan__warning mt-48 mb-48">
            <WarningStatus
              url="/"
              description="Afleveringsdatoen for lånet er overskredet, derfor pålægges du et gebyr, når materialet afleveres"
            />
          </div>
        )}
        {buttonsUpTop && (
          <div className="modal-loan__buttons">
            <Checkbox
              hiddenLabel={false}
              isChecked={isAllChecked}
              callback={handleToggleAll}
              label="Vælg alle med mulighed for fornyelse"
            />
            <Button
              buttonType="default"
              label={`Forny mulige (${countRenewable})`}
              size="small"
              variant="filled"
              disabled={false}
              collapsible
            />
          </div>
        )}
        <ul className="modal-loan__list-container">
          {loanList.map(({ materialType, list }) => (
            <li className="modal-loan__list">
              {materialType && (
                <div className="modal-loan__count">
                  <LinkFilters
                    filters={[
                      {
                        title: materialType,
                        counter: `${list.length}`,
                        href: "/",
                      },
                    ]}
                  />
                </div>
              )}
              <ul className="modal-loan__list-materials">
                {list.map((listItem, index) => (
                  <li>
                    <ListMaterials
                      key={`${index}-${isAllChecked}`}
                      {...listItem}
                      isChecked={
                        listItem.canBeRenewed
                          ? listItem.isChecked || isAllChecked
                          : false
                      }
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {!buttonsUpTop && (
          <div className="modal-loan__buttons modal-loan__buttons--bottom">
            <Checkbox
              hiddenLabel={false}
              isChecked={isAllChecked}
              callback={handleToggleAll}
              label="Vælg alle med mulighed for fornyelse"
            />
            <Button
              buttonType="default"
              label={`Forny mulige (${countRenewable})`}
              size="small"
              variant="filled"
              disabled={false}
              collapsible
            />
          </div>
        )}
      </div>
    </Modal>
  );
};
