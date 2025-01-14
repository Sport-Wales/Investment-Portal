import React, { useState } from 'react';
import { useForm } from '../../../../context/FormContext';
import FormField from '../shared/FormField';
import { 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  FileCheck,
  UserCog,
  ClipboardCheck
} from 'lucide-react';

const SignOff = () => {
  const { state, dispatch } = useForm();
  const formData = state.formData.signOff || {};
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    dispatch({
      type: 'SET_FORM_DATA',
      section: 'signOff',
      data: { ...formData, [field]: value }
    });
  };

  // Existing declaration text
  const declarationText = `By signing this form, I/we confirm that:

1. All information provided in this application is true and accurate to the best of our knowledge.
2. We understand and agree to the terms and conditions of the funding.
3. We will comply with all monitoring and reporting requirements.
4. We have the authority to make this application on behalf of the organisation.
5. We will notify Sport Wales immediately of any changes that may affect this application.
6. We understand that providing false or misleading information may result in the withdrawal of funding.`;

  return (
    <div className="space-y-8">
      {/* Partner Organization Section Header */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-900">Partner Organization Sign Off</h2>
        <p className="mt-1 text-sm text-gray-600">Complete all required signatures to submit your application</p>
      </div>

      {/* Declaration Section - Same as before */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Declaration</h3>
            <p className="mt-1 text-sm text-gray-500">
              Please review the declaration carefully before signing
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-4 mb-6">
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
            {declarationText}
          </pre>
        </div>
      </div>

      {/* First Signatory */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">First Signatory</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            required
            error={state.errors?.signatory1Name}
          >
            <input
              type="text"
              value={formData.signatory1Name || ''}
              onChange={(e) => handleChange('signatory1Name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
              placeholder="Enter full name"
            />
          </FormField>

          <FormField
            label="Job Title"
            required
            error={state.errors?.signatory1JobTitle}
          >
            <input
              type="text"
              value={formData.signatory1JobTitle || ''}
              onChange={(e) => handleChange('signatory1JobTitle', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
              placeholder="Enter job title"
            />
          </FormField>

          <FormField
            label="Date"
            required
            error={state.errors?.signatory1Date}
          >
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                value={formData.signatory1Date || ''}
                onChange={(e) => handleChange('signatory1Date', e.target.value)}
                className="block w-full pl-10 rounded-md border-gray-300 focus:border-sw-blue focus:ring-sw-blue"
              />
            </div>
          </FormField>
        </div>
         {/* Electronic Signature Confirmation */}
         <div className="bg-white rounded-lg border border-gray-200 mt-10 p-2">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Electronic Signature Confirmation
                </h3>
                <p className="mt-2 text-sm text-gray-500 mb-4">
                  By checking this box, you confirm that you understand this electronic submission
                  serves as your official signature and carries the same legal weight as a handwritten signature.
                </p>
                <div className="flex items-center">
                  <input
                    id="electronic-signature"
                    type="checkbox"
                    checked={formData.electronicSignature || false}
                    onChange={(e) => handleChange('electronicSignature', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-sw-blue focus:ring-sw-blue"
                  />
                  <label htmlFor="electronic-signature" className="ml-3 text-sm font-medium text-gray-700">
                    I understand and agree to electronic signature submission
                  </label>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Second Signatory */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Second Signatory</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            required
            error={state.errors?.signatory2Name}
          >
            <input
              type="text"
              value={formData.signatory2Name || ''}
              onChange={(e) => handleChange('signatory2Name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
              placeholder="Enter full name"
            />
          </FormField>

          <FormField
            label="Job Title"
            required
            error={state.errors?.signatory2JobTitle}
          >
            <input
              type="text"
              value={formData.signatory2JobTitle || ''}
              onChange={(e) => handleChange('signatory2JobTitle', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
              placeholder="Enter job title"
            />
          </FormField>

          <FormField
            label="Date"
            required
            error={state.errors?.signatory2Date}
          >
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                value={formData.signatory2Date || ''}
                onChange={(e) => handleChange('signatory2Date', e.target.value)}
                className="block w-full pl-10 rounded-md border-gray-300 focus:border-sw-blue focus:ring-sw-blue"
              />
            </div>
          </FormField>
        </div>
            {/* Electronic Signature Confirmation */}
          <div className="bg-white rounded-lg border border-gray-200 mt-10 p-2">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Electronic Signature Confirmation
                </h3>
                <p className="mt-2 text-sm text-gray-500 mb-4">
                  By checking this box, you confirm that you understand this electronic submission
                  serves as your official signature and carries the same legal weight as a handwritten signature.
                </p>
                <div className="flex items-center">
                  <input
                    id="electronic-signature"
                    type="checkbox"
                    checked={formData.electronicSignature || false}
                    onChange={(e) => handleChange('electronicSignature', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-sw-blue focus:ring-sw-blue"
                  />
                  <label htmlFor="electronic-signature" className="ml-3 text-sm font-medium text-gray-700">
                    I understand and agree to electronic signature submission
                  </label>
                </div>
              </div>
            </div>
          </div>
      </div>

      

      {/* Sport Wales Board Sign Off Section */}
      <div className="mt-12">
        <div className="bg-sw-blue bg-opacity-5 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-sw-blue">Sport Wales Board Sign Off</h2>
          <p className="mt-1 text-sm text-gray-600">Internal approval for funding decision</p>
        </div>

        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-6">
            {/* Board Review Confirmation */}
            <FormField
              label="Board Review Status"
              required
            >
              <div className="mt-2 space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.boardReviewComplete || false}
                    onChange={(e) => handleChange('boardReviewComplete', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-sw-blue focus:ring-sw-blue"
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    Board has reviewed and approved the investment application
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.budgetApproved || false}
                    onChange={(e) => handleChange('budgetApproved', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-sw-blue focus:ring-sw-blue"
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    Budget has been approved for next financial year
                  </label>
                </div>
              </div>
            </FormField>

            {/* Meeting Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Board Meeting Date"
                required
              >
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={formData.boardMeetingDate || ''}
                    onChange={(e) => handleChange('boardMeetingDate', e.target.value)}
                    className="block w-full pl-10 rounded-md border-gray-300 focus:border-sw-blue focus:ring-sw-blue"
                  />
                </div>
              </FormField>

              <FormField
                label="Reference Number"
                required
              >
                <input
                  type="text"
                  value={formData.referenceNumber || ''}
                  onChange={(e) => handleChange('referenceNumber', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
                  placeholder="Enter reference number"
                />
              </FormField>
            </div>

            {/* Decision Makers */}
            <FormField
              label="Decision Makers Present"
              description="List names of board members present for decision"
              required
            >
              <textarea
                value={formData.decisionMakers || ''}
                onChange={(e) => handleChange('decisionMakers', e.target.value)}
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
                placeholder="Enter names of decision makers"
              />
            </FormField>

            {/* Board Notes */}
            <FormField
              label="Board Notes"
              description="Any specific notes or conditions from the board"
            >
              <textarea
                value={formData.boardNotes || ''}
                onChange={(e) => handleChange('boardNotes', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
                placeholder="Enter any notes from the board"
              />
            </FormField>

            {/* Authorization for Offer Letter */}
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Ready for Offer Letter</h3>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.authorizeOfferLetter || false}
                        onChange={(e) => handleChange('authorizeOfferLetter', e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-sw-blue focus:ring-sw-blue"
                      />
                      <label className="ml-3 text-sm text-green-800">
                        Authorize generation and issuance of offer letter for next financial year
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sport Wales Sign Off */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <FormField label="Sport Wales Officer">
                <input
                  type="text"
                  value={formData.swOfficer || ''}
                  onChange={(e) => handleChange('swOfficer', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
                  placeholder="Enter name"
                />
              </FormField>

              <FormField label="Head of Service">
                <input
                  type="text"
                  value={formData.headOfService || ''}
                  onChange={(e) => handleChange('headOfService', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sw-blue focus:ring-sw-blue"
                  placeholder="Enter name"
                />
              </FormField>

              <FormField label="Sign-off Date">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={formData.swSignOffDate || ''}
                    onChange={(e) => handleChange('swSignOffDate', e.target.value)}
                    className="block w-full pl-10 rounded-md border-gray-300 focus:border-sw-blue focus:ring-sw-blue"
                  />
                </div>
              </FormField>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Information */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <ClipboardCheck className="h-6 w-6 text-sw-blue flex-shrink-0" />
          <div>
            <h3 className="text-base font-medium text-gray-900">Next Steps</h3>
            <div className="mt-2 text-sm text-gray-600">
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-sw-blue mr-2"></span>
                  Sport Wales will review your completed application
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-sw-blue mr-2"></span>
                  Board approval will be processed within established timelines
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-sw-blue mr-2"></span>
                  Once approved, you'll receive an offer letter for the next financial year
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-sw-blue mr-2"></span>
                  Track progress and updates in your dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOff;