"use client"
import { Modal } from "flowbite-react"
import type { Dispatch, SetStateAction } from "react"
import { Contact } from "./ContactEmailFom"

export const ContactModal = ({ isModalOpen, setIsModalOpen }: {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}) => {


    return <Modal
        show={isModalOpen} size="lg" popup={true} onClose={() => setIsModalOpen(false)}>
        <div className="w-full bg-gray-300 rounded-lg h-[600px] sm:h-screen overflow-y-auto">
            <div className="flex justify-end mt-2 mr-2">
                <button
                    className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-rose-500"
                    onClick={() => setIsModalOpen(false)}
                >
                    X
                </button>
            </div>
            <Contact />
        </div>
    </Modal>
}