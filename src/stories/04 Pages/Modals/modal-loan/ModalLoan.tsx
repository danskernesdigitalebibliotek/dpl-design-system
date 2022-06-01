import { useEffect, useMemo, useState } from "react";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { ButtonUI } from "../../../01 Atoms/Buttons/button-ui/ButtonUI";
import { Button } from "../../../01 Atoms/Buttons/button/Button";
import { Checkbox } from "../../../01 Atoms/checkbox/Checkbox";
import { Counter } from "../../../01 Atoms/counter/Counter";
import { LinkFilters } from "../../../01 Atoms/link-filters/LinkFilters";
import { Links } from "../../../01 Atoms/links/Links";
import {
  ListMaterials,
  ListMaterialsProps,
} from "../../../03 Components/Lists/list-materials/ListMaterials";
import { WarningStatus } from "../../../01 Atoms/warning-status/WarningStatus";

export type ModalLoanProps = {
  title: string;
  description: string;
  showModal: boolean;
  showExpired: boolean;
};

export const ModalLoan = (props: ModalLoanProps) => {
  const [showModal, setShow] = useState(props.showModal);
  const [isAllChecked, setChecked] = useState(false);

  useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal]);

  const toggleModal = () => {
    setShow(!showModal);
  };

  const isExpired = props.showExpired;
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

  if (!showModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  const handleToggleAll = () => {
    setChecked(!isAllChecked);
  };

  return (
    <div
      className={`modal modal-loan modal-padding ${
        showModal ? "modal-show" : ""
      }`}
    >
      <ModalCloseButton toggleModal={toggleModal} />
      <div className="modal-loan__container">
        <div className="modal-loan__header">
          {isExpired && (
            <div className="mr-32">
              <Counter
                label={"dage"}
                percentage={100}
                value={-2}
                status={"danger"}
                isReady={false}
              />
            </div>
          )}
          <div>
            <h2 className="modal-loan__title text-header-h2">{props.title}</h2>
            <p className="text-body-medium-regular color-secondary-gray mt-4">
              {props.description}
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

        <div className="modal-loan__buttons">
          <Checkbox
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
            collapsible={true}
          />
        </div>

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
      </div>
    </div>
  );
};

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
