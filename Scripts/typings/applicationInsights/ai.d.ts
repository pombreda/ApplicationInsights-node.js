﻿declare module Microsoft.ApplicationInsights {
    enum LoggingSeverity {
        CRITICAL = 0,
        WARNING = 1,
    }
    class _InternalLogging {
        /**
         * Prefix of the traces in portal.
         */
        private static AiUserActionablePrefix;
        /**
         * For user non actionable traces use AI Internal prefix.
         */
        private static AiNonUserActionable;
        /**
         * Maximum queue size.
         */
        private static MAX_QUEUE_SIZE;
        /**
         * When this is true the SDK will throw exceptions to aid in debugging.
         */
        static enableDebugExceptions: () => boolean;
        /**
         * When this is true the SDK will throw exceptions to aid in debugging.
         */
        static verboseLogging: () => boolean;
        static queue: any[];
        /**
         * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
         */
        static throwInternalNonUserActionable(severity: LoggingSeverity, message: string): void;
        /**
         * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
         */
        static throwInternalUserActionable(severity: LoggingSeverity, message: string): void;
        /**
         * This will write a warning to the console if possible
         */
        static warn(message: string): void;
    }
}
declare module Microsoft.ApplicationInsights {
    class Util {
        private static document;
        /**
         * helper method to set userId and sessionId cookie
         */
        static setCookie(name: any, value: any): void;
        /**
         * helper method to access userId and sessionId cookie
         */
        static getCookie(name: any): string;
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        static trim(str: string): string;
        /**
         * generate GUID
         */
        static newGuid(): string;
        /**
         * Check if an object is of type Array
         */
        static isArray(obj: any): boolean;
        /**
         * Check if an object is of type Error
         */
        static isError(obj: any): boolean;
        /**
         * Check if an object is of type Date
         */
        static isDate(obj: any): boolean;
        /**
         * Convert a date to I.S.O. format in IE8
         */
        static toISOStringForIE8(date: Date): string;
        /**
         * Convert ms to c# time span format
         */
        static msToTimeSpan(totalms: number): string;
    }
}
declare module Microsoft.ApplicationInsights {
    interface ISerializable {
        /**
         * The set of fields for a serializeable object.
         * This defines the serialization order and a value of true/false
         * for each field defines whether the field is required or not.
         */
        aiDataContract: any;
    }
    class Serializer {
        /**
         * Serializes the current object to a JSON string.
         */
        static serialize(input: ISerializable): string;
        private static _serializeObject(source, name);
        private static _serializeArray(sources, name);
        private static _serializeStringMap(map, expectedType, name);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class DataSanitizer {
        /**
        * Max length allowed for custom names.
        */
        private static MAX_NAME_LENGTH;
        /**
         * Max length allowed for custom values.
         */
        private static MAX_STRING_LENGTH;
        /**
         * Max length allowed for url.
         */
        private static MAX_URL_LENGTH;
        /**
         * Max length allowed for messages.
         */
        private static MAX_MESSAGE_LENGTH;
        /**
         * Max length allowed for exceptions.
         */
        private static MAX_EXCEPTION_LENGTH;
        static sanitizeKeyAndAddUniqueness(key: any, map: any): any;
        static sanitizeKey(name: any): any;
        static sanitizeString(value: any): any;
        static sanitizeUrl(url: any): any;
        static sanitizeMessage(message: any): any;
        static sanitizeException(exception: any): any;
        static sanitizeProperties(properties: any): any;
        static sanitizeMeasurements(measurements: any): any;
        static padNumber(num: any): string;
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Item implements ISerializable {
        /**
         * The data item for this telemetry.
         */
        ver: number;
        /**
         * User defined measurements
         */
        measurements: any;
        /**
         * User defined properties
         */
        properties: any;
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: any;
        /**
         * Constructs a new instance of telemetry data.
         */
        constructor(contractExtension: Object, properties?: Object, measurements?: Object);
        static extendContract(contract: any, contractExtension: any): any;
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Data {
        /**
         * The type of this telemetry.
         */
        type: string;
        /**
         * The data item for this telemetry.
         */
        item: Item;
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: {
            type: boolean;
            item: boolean;
        };
        /**
         * Constructs a new instance of telemetry data.
         */
        constructor(type: string, item: Item);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Internal {
        /**
         * The SDK version used to create this telemetry item.
         */
        sdkVersion: string;
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: {
            sdkVersion: boolean;
        };
        /**
         * Constructs a new instance of the internal telemetry data class.
         */
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Application implements ISerializable {
        /**
         * The application version.
         */
        ver: string;
        /**
         * component id
         */
        id: string;
        /**
         * See ISerializable
         */
        aiDataContract: {};
        /**
         * Constructs a new isntance of the Application class
         */
        constructor(appUserId: string);
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Device {
        /**
         * The type for the current device.
         */
        type: string;
        /**
         * A device unique ID.
         */
        id: string;
        /**
         * The operating system name and version.
         */
        os: string;
        /**
         * The operating system name and version.
         */
        osVersion: string;
        /**
         * The device OEM for the current device.
         */
        oemName: string;
        /**
         * The device model for the current device.
         */
        model: string;
        /**
         * The IANA interface type for the internet connected network adapter.
         */
        network: number;
        /**
         * The application screen resolution.
         */
        resolution: string;
        /**
         * The current display language of the operating system.
         */
        locale: string;
        /**
         * See ISerializable
         */
        aiDataContract: {
            type: boolean;
            id: boolean;
            os: boolean;
            osVersion: boolean;
            oemName: boolean;
            model: boolean;
            network: boolean;
            resolution: boolean;
            locale: boolean;
        };
        /**
         * Constructs a new instance of the Device class
         */
        constructor();
        getOsInfo(appVersion: string): void;
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Location implements ISerializable {
        /**
         * GPS latitude
         */
        latitude: string;
        /**
         * GPS longitude
         */
        longitude: string;
        /**
         * Client IP address for reverse lookup
         */
        IP: string;
        /**
         * Developer override for Region geo location
         */
        continent: string;
        /**
         * Developer override for Country geo location
         */
        country: string;
        /**
         * Developer override for Province geo location
         */
        province: string;
        /**
         * Developer override for City geo location
         */
        city: string;
        /**
         * See ISerializable
         */
        aiDataContract: {};
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Operation implements ISerializable {
        /**
         * The operation ID.
         */
        id: string;
        /**
         * See ISerializable
         */
        aiDataContract: {};
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    interface ISessionConfig {
        sessionRenewalMs: () => number;
        sessionExpirationMs: () => number;
    }
    class Session {
        static acquisitionSpan: number;
        static renewalSpan: number;
        /**
         * The session ID.
         */
        id: string;
        /**
         * The true if this is the first session
         */
        isFirst: boolean;
        /**
         * The true if this is a new session
         */
        isNewSession: boolean;
        /**
         * See ISerializable
         */
        aiDataContract: {};
        /**
         * The date at which this guid was genereated.
         * Per the spec the ID will be regenerated if more than acquisitionSpan milliseconds ellapse from this time.
         */
        acquisitionDate: number;
        /**
         * The date at which this session ID was last reported.
         * This value should be updated whenever telemetry is sent using this ID.
         * Per the spec the ID will be regenerated if more than renewalSpan milliseconds elapse from this time with no activity.
         */
        renewalDate: number;
        /**
         * The configuration for session behavior
         */
        config: ISessionConfig;
        /**
         * Constructs a new isntance of the Session class
         */
        constructor(config?: ISessionConfig);
        update(): void;
        private renew();
        private setCookie(guid, acq, renewal);
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class User implements ISerializable {
        /**
         * The user ID.
         */
        id: string;
        /**
         * The user ID.
         */
        accountId: string;
        /**
         * See ISerializable
         */
        aiDataContract: {};
        constructor(accountId: string);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Base {
        /**
         * The version number for this telemetry request.
         */
        ver: number;
        /**
         * The type of this telemetry.
         */
        name: string;
        /**
         * The time stamp for this telemetry.
         */
        time: string;
        /**
         * The instrumentation key associated with this telemetry object.
         */
        iKey: string;
        /**
         * The object describing a component tracked by this object.
         */
        application: Context.Application;
        /**
         * The object describing a device tracked by this object.
         */
        device: Context.Device;
        /**
         * The object describing a user tracked by this object.
         */
        user: Context.User;
        /**
         * The object describing a session tracked by this object.
         */
        session: Context.Session;
        /**
         * The object describing a location tracked by this object.
         */
        location: Context.Location;
        /**
         * The object describing a operation tracked by this object.
         */
        operation: Context.Operation;
        /**
         * The serializable data associated with this object.
         */
        data: Data;
        /**
         * The internal data for this item.
         */
        internal: Internal;
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: any;
        /**
         * Constructs a new instance of a telemetry object.
         */
        constructor(name: string, data: Data);
    }
}
declare module Microsoft.ApplicationInsights {
    interface ISenderConfig {
        /**
         * The url to which payloads will be sent
         */
        endpointUrl: () => string;
        /**
         * The maximum size of a single serialized telemetry item
         */
        maxPayloadSizeInBytes: () => number;
        /**
         * The maximum size of a batch in bytes
         */
        maxBatchSizeInBytes: () => number;
        /**
         * The maximum interval allowed between calls to batchInvoke
         */
        maxBatchInterval: () => number;
        /**
         * The master off switch.  Do not send any data if set to TRUE
         */
        disableTelemetry: () => boolean;
    }
    class Sender {
        private _buffer;
        private _lastSend;
        private _timeoutHandle;
        /**
         * The configuration for this sender instance
         */
        _config: ISenderConfig;
        /**
         * A method which will cause data to be send to the url
         */
        _sender: (payload: string) => void;
        /**
         * Constructs a new instance of the Sender class
         */
        constructor(config: ISenderConfig);
        /**
         * Add a telemetry item to the send buffer
         */
        send(telemetry: Telemetry.Common.Base): void;
        private _getSizeInBytes(list);
        _truncate(telemetry: Telemetry.Common.Base, initialSize: number): Telemetry.Common.Base;
        /**
         * Immediately sennd buffered data
         */
        triggerSend(): void;
        /**
         * Send XMLHttpRequest
         */
        private _xhrSender(payload);
        /**
         * Send XDomainRequest
         */
        private _xdrSender(payload);
        /**
         * xhr state changes
         */
        static _xhrReadyStateChange(xhr: XMLHttpRequest, payload: string): void;
        /**
         * xdr state changes
         */
        static _xdrOnLoad(xdr: XDomainRequest, payload: string): void;
        /**
         * error handler
         */
        static _onError(payload: string, message: string, event?: ErrorEvent): void;
        /**
         * success handler
         */
        static _onSuccess(payload: string): void;
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Trace extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the MetricTelemetry object
         */
        constructor(message: string, properties?: Object, measurements?: Object);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    /**
     * Base class for telemetry of an event
     * this is used by Event, PageView, and AJAX
     */
    class EventData extends Item {
        name: string;
        url: string;
        duration: string;
        constructor(name: string, url: string, durationMs: number, properties: any, measurements: any);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class AjaxCall extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the AjaxCallTelemetry object
         */
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Event extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the EventTelemetry object
         */
        constructor(name: string, durationMs?: number, properties?: Object, measurements?: Object);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Exception extends Common.Base implements ISerializable {
        static type: string;
        /**
        * Constructs a new isntance of the ExceptionTelemetry object
        */
        constructor(exception: Error, handledAt?: string, properties?: Object, measurements?: Object);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Metric extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the MetricTelemetry object
         */
        constructor(name: string, value: number, count?: number, min?: number, max?: number);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class PageView extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class PageViewPerformance extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        constructor(name: string, url: string, durationMs: number, properties?: any, measurements?: any);
        /**
         * Returns undefined if not available, true if ready, false otherwise
         */
        static checkPageLoad(): any;
        static getDuration(start: any, end: any): number;
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    /**
     * Base class for telemetry with data
     * this is used by Metric and RemoteDependency
     */
    class DataPoint {
        name: string;
        value: number;
        /**
         * The type of this measurement. "M" indicates a single point, "A" indicates an aggregate
         */
        type: string;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        constructor(name: string, value: number, type?: string, count?: number, min?: number, max?: number);
        aiDataContract: {
            name: boolean;
            value: boolean;
            type: boolean;
            count: boolean;
            min: boolean;
            max: boolean;
        };
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class RemoteDependency extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the EventTelemetry object
         */
        constructor(dependencyKind: number, resource: string, name: string, value: number, type?: string, count?: number, min?: number, max?: number);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Request extends Common.Base implements ISerializable {
        static type: string;
        /**
         * Constructs a new instance of the EventTelemetry object
         */
        constructor(name: string, start: number, duration: number, responseCode: number, success: boolean, properties?: any, measurements?: any);
    }
}
declare module Microsoft.ApplicationInsights {
    interface ITelemetryConfig extends ISenderConfig {
        instrumentationKey: () => string;
        accountId: () => string;
        appUserId: () => string;
        sessionRenewalMs: () => number;
        sessionExpirationMs: () => number;
    }
    class TelemetryContext {
        /**
         * The configuration for this telemetry context
         */
        _config: ITelemetryConfig;
        /**
         * The sender instance for this context
         */
        _sender: Sender;
        /**
         * The object describing a component tracked by this object.
         */
        application: Context.Application;
        /**
         * The object describing a device tracked by this object.
         */
        device: Context.Device;
        /**
         * The object describing a user tracked by this object.
         */
        user: Context.User;
        /**
         * The object describing a session tracked by this object.
         */
        session: Context.Session;
        /**
         * The object describing a location tracked by this object.
         */
        location: Context.Location;
        /**
         * The object describing a operation tracked by this object.
         */
        operation: Context.Operation;
        constructor(config: ITelemetryConfig);
        /**
         * Use Sender.ts to send telemetry object to the endpoint
         */
        track(telemetryObject: Telemetry.Common.Base): Telemetry.Common.Base;
    }
}
declare module Microsoft.ApplicationInsights {
    var Version: string;
    interface IConfig {
        instrumentationKey: string;
        endpointUrl: string;
        accountId: string;
        appUserId: string;
        sessionRenewalMs: number;
        sessionExpirationMs: number;
        maxPayloadSizeInBytes: number;
        maxBatchSizeInBytes: number;
        maxBatchInterval: number;
        enableDebug: boolean;
        autoCollectErrors: boolean;
        disableTelemetry: boolean;
        verboseLogging: boolean;
        diagnosticLogInterval: number;
    }
    class AppInsights {
        private _eventTracking;
        private _pageTracking;
        config: IConfig;
        context: TelemetryContext;
        constructor(config: IConfig);
        startTrackPage(name?: string): void;
        stopTrackPage(name?: string, url?: string, properties?: Object, measurements?: Object): void;
        trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object): void;
        startTrackEvent(name: string): void;
        stopTrackEvent(name: string, properties?: Object, measurements?: Object): void;
        trackEvent(name: string, properties?: Object, measurements?: Object): void;
        trackException(exception: Error, handledAt?: string, properties?: Object, measurements?: Object): void;
        trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number): void;
        trackTrace(message: string, properties?: Object, measurements?: Object): void;
        _onerror(message: string, url: string, lineNumber: number, columnNumber: number, error: Error): void;
    }
}
declare module Microsoft.ApplicationInsights {
    interface Snippet {
        queue: {
            (): void;
        }[];
        config: IConfig;
    }
    class Initialization {
        snippet: Snippet;
        config: IConfig;
        constructor(snippet: Snippet);
        loadAppInsights(): AppInsights;
        emptyQueue(): void;
        pollInteralLogs(appInsightsInstance: AppInsights): number;
    }
}