import { useEffect, useMemo, useState } from "react";

import {
  ModalCloseButton,
  ModalFallbackButton,
} from "../../components/ModalShared";
import { ButtonUI } from "../button-ui/ButtonUI";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Counter } from "../counter/Counter";
import { LinkFilters } from "../link-filters/LinkFilters";
import { Links } from "../links/Links";
import { ListMaterials, ListMaterialsProps } from "../list-materials/ListMaterials";
import { WarningStatus } from "../warning-status/WarningStatus";

export type ModalLoanProps = {
  title: string;
  description: string;
  showModal: boolean;
  showExpired: boolean;
};

export const ModalLoan = (props: ModalLoanProps) => {
  const [showModal, setShow] = useState(props.showModal);

  useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal]);

  const toggleModal = () => {
    setShow(!showModal);
  };

  const isExpired = props.showExpired
  const loanList = isExpired ? listExpired : listExpiresSoon;

  const countRenewable = useMemo(() => {
    let total = 0
    loanList.forEach(loans => loans.list.forEach(material => {
      if (material.canBeRenewed) total += 1
    }))
    return total
  }, [loanList])


  if (!showModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div className={`modal modal-loan ${showModal ? "modal-show" : ""}`}>
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
          <Button
            buttonType="default"
            label={`Forny mulige (${countRenewable})`}
            size="small"
            variant="filled"
            disabled={false}
            collapsible={true}
          />
        </div>

        <div className="modal-loan__list__container">
          {
            loanList.map(({ materialType, list }) => (
              <div className="modal-loan__list">
                {
                  materialType && (
                    <div className="modal-loan__count">
                      <LinkFilters filters={[
                        {
                          title: materialType,
                          counter: `${list.length}`,
                        }
                      ]} />
                    </div>
                  )
                }
                <div className="modal-loan__list__materials">
                  {
                    list.map((listItem, index) => (
                      <ListMaterials key={index} {...listItem} />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
};


type LoanMaterials = Array<{
  materialType?: string,
  list: Array<ListMaterialsProps>;
}>

const listExpired: LoanMaterials = [
  {
    list: [
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: true,
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
        isChecked: true,
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
        isChecked: true,
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
      }
    ]
  }
]


const listExpiresSoon: LoanMaterials = [
  {
    materialType: "lån",
    list: [
      {
        title: "Audrey Hepburn",
        author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
        isChecked: true,
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
    ]
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
    ]
  }
]